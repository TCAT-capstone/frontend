import React from 'react';

import TicketBookItemList from '@components/Ticketbook/TicketbookItemList';
import TicketbookEditor from '@components/Ticketbook/TicketbookEditor';
import BasicButton from '@components/Common/BasicButton';
import Spinner from '@components/Common/Spinner';

import { TicketbookType, TicketbookListType } from '@src/types/ticketbook';
import plusImg from '@images/plus-rounded.svg';
import Layout from '@styles/Layout';
import {
  Container,
  TicketbookListContainer,
  EditContainer,
  TicketbookAddButton,
  ButtonContainer,
  DeleteButton,
} from './style';

interface Props {
  ticketbooks: TicketbookListType;
  setTicketbooks: React.Dispatch<React.SetStateAction<TicketbookListType>>;
  deleteTicketbook: () => void;
  addTicketbook: () => void;
  currTicketbook: TicketbookType;
  changeCurrTicketbook: (id: number) => void;
  newName: string;
  newDescription: string;
  newImageUrl: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFile: (file: File) => void;
  updateAllTicketbooks: () => void;
  isLoaded: boolean;
}

const TicketbookTemplate: React.FC<Props> = ({
  ticketbooks,
  setTicketbooks,
  deleteTicketbook,
  addTicketbook,
  currTicketbook,
  changeCurrTicketbook,
  newName,
  newDescription,
  newImageUrl,
  handleNameChange,
  handleDescriptionChange,
  handleFile,
  updateAllTicketbooks,
  isLoaded,
}) => {
  return (
    <Layout>
      <Container>
        <TicketbookListContainer>
          <TicketBookItemList
            ticketbooks={ticketbooks}
            setTicketbooks={setTicketbooks}
            currTicketbook={currTicketbook}
            changeCurrTicketbook={changeCurrTicketbook}
          />
          <TicketbookAddButton type="button" onClick={() => addTicketbook()}>
            <img src={plusImg} alt="추가" />
            <span>티켓북 추가</span>
          </TicketbookAddButton>
        </TicketbookListContainer>
        <EditContainer>
          <TicketbookEditor
            currTicketbook={currTicketbook}
            newName={newName}
            newDescription={newDescription}
            newImageUrl={newImageUrl}
            handleNameChange={handleNameChange}
            handleDescriptionChange={handleDescriptionChange}
            handleFile={handleFile}
          />
          <ButtonContainer>
            <DeleteButton type="button" onClick={() => deleteTicketbook()}>
              <span>삭제하기</span>
            </DeleteButton>
            {isLoaded ? <Spinner size={1.5} /> : <BasicButton text="모두 저장하기" handler={updateAllTicketbooks} />}
          </ButtonContainer>
        </EditContainer>
      </Container>
    </Layout>
  );
};

export default TicketbookTemplate;
