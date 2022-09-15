import React from 'react';

import TicketBookItemList from '@components/Ticketbook/TicketbookItemList';
import TicketbookEditor from '@components/Ticketbook/TicketbookEditor';
import { TicketbookType, TicketbookListType } from '@src/types/ticketbook';

import plusImg from '@images/plus-rounded.svg';
import Layout from '@styles/Layout';
import { Container, TicketbookListContainer, EditContainer, TicketbookAddButton } from './style';

interface Props {
  ticketbooks: TicketbookListType;
  setTicketbooks: React.Dispatch<React.SetStateAction<TicketbookListType>>;
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
          <TicketBookItemList
            ticketbooks={ticketbooks}
            setTicketbooks={setTicketbooks}
            deleteTicketbook={deleteTicketbook}
            currTicketbook={currTicketbook}
            changeCurrTicketbook={changeCurrTicketbook}
            changeDefaultTicketbook={changeDefaultTicketbook}
          />
          <TicketbookAddButton type="button" onClick={() => addTicketbook()}>
            <img src={plusImg} alt="추가" />
            <span>티켓북 추가</span>
          </TicketbookAddButton>
        </TicketbookListContainer>
        <EditContainer>
          <TicketbookEditor currTicketbook={currTicketbook} />
        </EditContainer>
      </Container>
    </Layout>
  );
};

export default TicketbookTemplate;
