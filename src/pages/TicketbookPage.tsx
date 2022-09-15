import React, { useEffect, useState } from 'react';

import TicketbookTemplate from '@templates/TicketbookTemplate';
import { TicketbookListType, TicketbookType } from '@src/types/ticketbook';
import { exampleTicketbooks } from '@src/stores/user';

const TicketbookPage: React.FC = () => {
  const [ticketbooks, setTicketbooks] = useState<TicketbookListType>(exampleTicketbooks);
  const [currTicketbook, setCurrTicketbook] = useState<TicketbookType>(ticketbooks[0]);
  const [newIndex, setNewIndex] = useState(-1);

  const changeCurrTicketbook = (id: number) => {
    const ticketbook = ticketbooks.find((v) => v.id === id);
    if (ticketbook) {
      setCurrTicketbook(ticketbook);
    }
  };

  const changeDefaultTicketbook = (id: number) => {
    setTicketbooks((prev) => {
      return [prev.find((v) => v.id === id) as TicketbookType, ...prev.filter((v) => v.id !== id)];
    });
  };

  const deleteTicketbook = (id: number) => {
    setTicketbooks((prev) => prev.filter((v) => v.id !== id));
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

  return (
    <TicketbookTemplate
      ticketbooks={ticketbooks}
      setTicketbooks={setTicketbooks}
      deleteTicketbook={deleteTicketbook}
      addTicketbook={addTicketbook}
      currTicketbook={currTicketbook}
      changeCurrTicketbook={changeCurrTicketbook}
      changeDefaultTicketbook={changeDefaultTicketbook}
    />
  );
};

export default TicketbookPage;
