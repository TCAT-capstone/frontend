/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { List, arrayMove } from 'react-movable';

import editImg from '@images/edit.svg';
import checkImg from '@images/check-rounded-purple.svg';

import { TicketbookType, TicketbookListType } from '@src/types/ticketbook';
import { TicketbookItem, TicketbookItemImg, CheckCircleImg } from './style';

interface Props {
  ticketbooks: TicketbookListType;
  setTicketbooks: React.Dispatch<React.SetStateAction<TicketbookListType>>;
  currTicketbook: TicketbookType;
  changeCurrTicketbook: (id: number) => void;
}

const TicketBookItemList: React.FC<Props> = ({ ticketbooks, setTicketbooks, currTicketbook, changeCurrTicketbook }) => {
  return (
    <List
      values={ticketbooks}
      onChange={({ oldIndex, newIndex }) => setTicketbooks(arrayMove(ticketbooks, oldIndex, newIndex))}
      renderList={({ children, props }) => <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => (
        <TicketbookItem {...props} focus={value.id === currTicketbook.id}>
          <TicketbookItemImg src={value.ticketbookImg ?? undefined} alt="" />
          <span>{value.name}</span>
          <button type="button" onClick={() => changeCurrTicketbook(value.id)}>
            <img src={editImg} alt="수정하기" />
          </button>
          {value.id === ticketbooks[0].id && <CheckCircleImg src={checkImg} />}
        </TicketbookItem>
      )}
    />
  );
};

export default TicketBookItemList;
