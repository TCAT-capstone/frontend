/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, arrayMove } from 'react-movable';

import moreImg from '@images/more.svg';
import checkImg from '@images/check-rounded-purple.svg';

import { TicketbookType, TicketbookListType } from '@src/types/ticketbook';
import { TicketbookItem, TicketbookItemImg, CheckCircleImg, MoreDropdown } from './style';

interface Props {
  ticketbooks: TicketbookListType;
  setTicketbooks: React.Dispatch<React.SetStateAction<TicketbookListType>>;
  deleteTicketbook: (id: number) => void;
  currTicketbook: TicketbookType;
  changeCurrTicketbook: (id: number) => void;
  changeDefaultTicketbook: (id: number) => void;
}

const TicketBookItemList: React.FC<Props> = ({
  ticketbooks,
  setTicketbooks,
  deleteTicketbook,
  currTicketbook,
  changeCurrTicketbook,
  changeDefaultTicketbook,
}) => {
  return (
    <List
      values={ticketbooks}
      onChange={({ oldIndex, newIndex }) => setTicketbooks(arrayMove(ticketbooks, oldIndex, newIndex))}
      renderList={({ children, props }) => <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => (
        <TicketbookItem {...props} focus={value.id === currTicketbook.id}>
          <TicketbookItemImg src={value.ticketbookImg ?? undefined} alt="" />
          <span>{value.name}</span>
          <button type="button" onClick={() => {}}>
            <img src={moreImg} alt="옵션 더보기" />
          </button>
          {value.id === ticketbooks[0].id && <CheckCircleImg src={checkImg} />}
          <MoreDropdown>
            <button type="button" onClick={() => changeDefaultTicketbook(value.id)}>
              <span>대표북 설정</span>
            </button>
            <button type="button" onClick={() => changeCurrTicketbook(value.id)}>
              <span>편집하기</span>
            </button>
            <button type="button" onClick={() => deleteTicketbook(value.id)}>
              <span>삭제하기</span>
            </button>
          </MoreDropdown>
        </TicketbookItem>
      )}
    />
  );
};

export default TicketBookItemList;
