/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, arrayMove } from 'react-movable';

import { TicketbookType } from '@src/types/ticketbook';

import moreImg from '@images/more.svg';
import plusImg from '@images/plus-rounded.svg';
import Layout from '@styles/Layout';
import {
  Container,
  TicketbookListContainer,
  EditContainer,
  TicketbookItem,
  TicketbookAddButton,
  MoreDropdown,
} from './style';

interface Props {
  ticketbooks: TicketbookType[];
  setTicketbooks: React.Dispatch<React.SetStateAction<TicketbookType[]>>;
  deleteTicketbook: (id: number) => void;
  addTicketbook: () => void;
  currTicketbookId: number;
  changeCurrTicketbook: (id: number) => void;
}

const TicketbookTemplate: React.FC<Props> = ({
  ticketbooks,
  setTicketbooks,
  deleteTicketbook,
  addTicketbook,
  currTicketbookId,
  changeCurrTicketbook,
}) => {
  return (
    <Layout>
      <Container>
        <TicketbookListContainer>
          <List
            values={ticketbooks}
            onChange={({ oldIndex, newIndex }) => setTicketbooks(arrayMove(ticketbooks, oldIndex, newIndex))}
            renderList={({ children, props }) => <ul {...props}>{children}</ul>}
            renderItem={({ value, props }) => (
              <TicketbookItem {...props} focus={value.id === currTicketbookId}>
                <img src={value.ticketbookImg ?? undefined} alt="" />
                <span>{value.name}</span>
                <button type="button" onClick={() => {}}>
                  <img src={moreImg} alt="옵션 더보기" />
                </button>
                <MoreDropdown>
                  <button type="button">
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
          <TicketbookAddButton type="button" onClick={() => addTicketbook()}>
            <img src={plusImg} alt="추가" />
            <span>티켓북 추가</span>
          </TicketbookAddButton>
        </TicketbookListContainer>
        <EditContainer>
          <div />
        </EditContainer>
      </Container>
    </Layout>
  );
};

export default TicketbookTemplate;
