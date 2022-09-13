import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import TicketbookTemplate from '@templates/TicketbookTemplate';

import { TicketbookType } from '@src/types/ticketbook';

const sampleTicketbooks = [
  {
    id: 1,
    name: '1',
    ticketbookImg: '',
    description: '1',
  },
  {
    id: 2,
    name: '2',
    ticketbookImg: '',
    description: '2',
  },
  {
    id: 3,
    name: '3',
    ticketbookImg: '',
    description: '3',
  },
];

const TicketbookPage: React.FC = () => {
  const [ticketbooks, setTicketbooks] = useState<TicketbookType[]>(sampleTicketbooks);
  const [currTicketbookId, setCurrTicketbookId] = useState(1);
  const [newSequence, setNewSequence] = useState(-1);

  const changeCurrTicketbook = (id: number) => {
    setCurrTicketbookId(id);
  };

  const deleteTicketbook = (id: number) => {
    setTicketbooks((prev) => prev.filter((v) => v.id !== id));
  };

  const addTicketbook = () => {
    const newTicketbook = {
      id: newSequence,
      name: '새로운 티켓북',
      ticketbookImg: '',
      description: '설명',
    };
    setTicketbooks((prev) => [...prev, newTicketbook]);
    setCurrTicketbookId(newSequence);
    setNewSequence((prev) => prev - 1);
  };

  return (
    <TicketbookTemplate
      ticketbooks={ticketbooks}
      setTicketbooks={setTicketbooks}
      deleteTicketbook={deleteTicketbook}
      addTicketbook={addTicketbook}
      currTicketbookId={currTicketbookId}
      changeCurrTicketbook={changeCurrTicketbook}
    />
  );
};

export default TicketbookPage;
