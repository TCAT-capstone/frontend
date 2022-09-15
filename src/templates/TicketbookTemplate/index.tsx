/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, arrayMove } from 'react-movable';

import Ticketbook from '@components/TicketbookList/Ticketbook';
import { TicketbookType } from '@src/types/ticketbook';

import moreImg from '@images/more.svg';
import checkImg from '@images/check-rounded-purple.svg';
import plusImg from '@images/plus-rounded.svg';
import Layout from '@styles/Layout';
import {
  Container,
  TicketbookListContainer,
  EditContainer,
  TicketbookItem,
  TicketbookItemImg,
  TicketbookAddButton,
  CheckCircleImg,
  MoreDropdown,
} from './style';

interface Props {
  ticketbooks: TicketbookType[];
  setTicketbooks: React.Dispatch<React.SetStateAction<TicketbookType[]>>;
  deleteTicketbook: (id: number) => void;
  addTicketbook: () => void;
  currTicketbook: TicketbookType;
  changeCurrTicketbook: (id: number) => void;
  changeDefaultTicketbook: (id: number) => void;
}

const TicketbookTemplate: React.FC<Props> = ({
  ticketbooks,
  setTicketbooks,
  deleteTicketbook,
  addTicketbook,
  currTicketbook,
  changeCurrTicketbook,
  changeDefaultTicketbook,
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
          <TicketbookAddButton type="button" onClick={() => addTicketbook()}>
            <img src={plusImg} alt="추가" />
            <span>티켓북 추가</span>
          </TicketbookAddButton>
        </TicketbookListContainer>
        <EditContainer>
          <Ticketbook
            backgroundImg={currTicketbook.ticketbookImg as string}
            name={currTicketbook.name}
            description={currTicketbook.description}
            size="small"
          />
        </EditContainer>
      </Container>
    </Layout>
  );
};

export default TicketbookTemplate;
