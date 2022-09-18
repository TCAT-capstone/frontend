import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import TicketbookTemplate from '@templates/TicketbookTemplate';
import { TicketbookListType, TicketbookType } from '@src/types/ticketbook';
import { exampleTicketbooks } from '@stores/user';
import { uploadImage } from '@apis/image';

const TicketbookPage: React.FC = () => {
  const [ticketbooks, setTicketbooks] = useState<TicketbookListType>(exampleTicketbooks);
  const [currTicketbook, setCurrTicketbook] = useState<TicketbookType>(ticketbooks[0]);
  const [newIndex, setNewIndex] = useState(-1);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  const changeCurrTicketbook = (id: number) => {
    const ticketbook = ticketbooks.find((v) => v.id === id);
    if (ticketbook) {
      setCurrTicketbook(ticketbook);
    }
  };

  const deleteTicketbook = () => {
    if (ticketbooks.length === 1) {
      toast.error('티켓북은 반드시 1개 이상이어야 합니다!');
    } else {
      let ticketbook;
      setTicketbooks((prev) => {
        ticketbook = prev.find((v) => v.id !== currTicketbook.id);
        if (ticketbook) {
          setCurrTicketbook(ticketbook);
        }
        return prev.filter((v) => v.id !== currTicketbook.id);
      });
    }
  };

  const addTicketbook = () => {
    const newTicketbook = {
      id: newIndex,
      name: '새로운 티켓북',
      ticketbookImg:
        'https://image.fmkorea.com/files/attach/new2/20220329/3655109/2889212861/4478307323/6090b3178e5b2bbc3476308bc475a3fb.jpg',
      description: '설명',
    };
    setTicketbooks((prev) => [...prev, newTicketbook]);
    setCurrTicketbook(newTicketbook);
    setNewIndex((prev) => prev - 1);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    setTicketbooks((prev) => {
      return prev.reduce((p, c) => {
        if (c.id === currTicketbook.id) {
          return [...p, { ...c, name: e.target.value }];
        }
        return [...p, c];
      }, [] as TicketbookListType);
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
    setTicketbooks((prev) => {
      return prev.reduce((p, c) => {
        if (c.id === currTicketbook.id) {
          return [...p, { ...c, description: e.target.value }];
        }
        return [...p, c];
      }, [] as TicketbookListType);
    });
  };

  const handleFile = async (file: File) => {
    const imgUrl = await uploadImage(file);
    if (imgUrl) {
      setNewImageUrl(imgUrl);
      setTicketbooks((prev) => {
        return prev.reduce((p, c) => {
          if (c.id === currTicketbook.id) {
            return [...p, { ...c, ticketbookImg: imgUrl }];
          }
          return [...p, c];
        }, [] as TicketbookListType);
      });
    }
  };

  useEffect(() => {
    setNewName(currTicketbook.name);
    setNewDescription(currTicketbook.description);
    setNewImageUrl(currTicketbook.ticketbookImg);
  }, [currTicketbook]);

  return (
    <TicketbookTemplate
      ticketbooks={ticketbooks}
      setTicketbooks={setTicketbooks}
      deleteTicketbook={deleteTicketbook}
      addTicketbook={addTicketbook}
      currTicketbook={currTicketbook}
      changeCurrTicketbook={changeCurrTicketbook}
      newName={newName}
      newDescription={newDescription}
      newImageUrl={newImageUrl}
      handleNameChange={handleNameChange}
      handleDescriptionChange={handleDescriptionChange}
      handleFile={handleFile}
    />
  );
};

export default TicketbookPage;
