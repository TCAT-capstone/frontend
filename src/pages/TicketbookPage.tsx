import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';

import TicketbookTemplate from '@templates/TicketbookTemplate';
import { TicketbookListType, TicketbookType } from '@src/types/ticketbook';
import { userTicketbooksState } from '@stores/user';
import { uploadImage } from '@apis/image';
import { updateTicketbooks } from '@apis/ticketbook';

const initialTicketbook = {
  id: -1,
  name: '',
  ticketbookImg: '',
  description: '',
};

const TicketbookPage: React.FC = () => {
  const [userTicketbooks, setUserTicketbooks] = useRecoilState(userTicketbooksState);
  const [ticketbooks, setTicketbooks] = useState<TicketbookListType>([]);
  const [currTicketbook, setCurrTicketbook] = useState<TicketbookType>(initialTicketbook);
  const [newIndex, setNewIndex] = useState(-1);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const validateTicketbooks = () => {
    return !ticketbooks.find((t) => t.name === '');
  };

  const updateAllTicketbooks = async () => {
    if (!validateTicketbooks()) {
      toast.error('티켓북 제목이 비어있습니다!');
      return;
    }
    setIsLoaded(true);
    const sequence = ticketbooks.map((t) => t.id).join(',');
    const appendTicketbooks = ticketbooks.filter((t) => t.id < 0);
    const deleteTicketboooks = userTicketbooks.filter((t) => !ticketbooks.find((ot) => ot.id === t.id));
    const updateTicketboooks = ticketbooks.filter((ot) =>
      userTicketbooks.find(
        (t) =>
          ot.id === t.id &&
          (ot.name !== t.name || ot.description !== t.description || ot.ticketbookImg !== t.ticketbookImg),
      ),
    );
    const request = {
      append: appendTicketbooks,
      update: updateTicketboooks,
      delete: deleteTicketboooks,
      sequence,
    };
    const updatedTicketbooks = await updateTicketbooks(request);
    if (updatedTicketbooks) {
      setUserTicketbooks(updatedTicketbooks);
    }
    setIsLoaded(false);
  };

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
      ticketbookImg: '',
      description: '',
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
    setTicketbooks(userTicketbooks);
    setCurrTicketbook(userTicketbooks[0]);
  }, [userTicketbooks]);

  useEffect(() => {
    if (currTicketbook) {
      setNewName(currTicketbook.name);
      setNewDescription(currTicketbook.description);
      setNewImageUrl(currTicketbook.ticketbookImg);
    }
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
      updateAllTicketbooks={updateAllTicketbooks}
      isLoaded={isLoaded}
    />
  );
};

export default TicketbookPage;
