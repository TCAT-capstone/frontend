/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { userTicketbooksState } from '@stores/user';

import Layout from '@styles/Layout';
import TextEditor from '@components/TextEditor';
import BasicButton from '@components/Common/BasicButton';
import Spinner from '@components/Common/Spinner';

import { TicketbookType } from '@src/types/ticketbook';
import arrowImg from '@images/down-arrow.svg';

import {
  PostContainer,
  TitleInput,
  BottomBar,
  TicketbookContainer,
  DropdownContainer,
  SelectedTicketbook,
  ArrowImg,
  SelectTicketbookContainer,
  ButtonWrapper,
} from './style';

interface Props {
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  ticketImg: string;
  handlePostSubmit: () => void;
  onTicketbook: boolean;
  handleTicketbookOpen: (e: MouseEvent) => void;
  ticketbook: TicketbookType;
  handleTicketbookChange: (e: MouseEvent, ticketbook: TicketbookType) => void;
  onDropdown: boolean;
  handleDropdownOpen: () => void;
  TicketbookContainerRef: React.RefObject<HTMLDivElement>;
  isLoaded: boolean;
}

const WriteTemplate: React.FC<Props> = ({
  title,
  handleTitleChange,
  content,
  setContent,
  ticketImg,
  handlePostSubmit,
  onTicketbook,
  handleTicketbookOpen,
  ticketbook,
  handleTicketbookChange,
  onDropdown,
  handleDropdownOpen,
  TicketbookContainerRef,
  isLoaded,
}) => {
  const userTicketbooks = useRecoilValue(userTicketbooksState);

  return (
    <Layout>
      <PostContainer>
        <TitleInput onChange={handleTitleChange} value={title} placeholder="제목을 입력해주세요." />
        <TextEditor content={content} setContent={setContent} ticketImg={ticketImg ?? ''} />
      </PostContainer>
      <BottomBar>
        {onTicketbook && (
          <TicketbookContainer ref={TicketbookContainerRef}>
            <span>티켓북</span>
            <DropdownContainer>
              <SelectedTicketbook onClick={handleDropdownOpen}>{ticketbook.name}</SelectedTicketbook>
              <ArrowImg src={arrowImg} alt="화살표" onDropdown={onDropdown} />
              {onDropdown && (
                <SelectTicketbookContainer>
                  {userTicketbooks.map((book) => (
                    <div key={book.id} onClick={(e) => handleTicketbookChange(e, book)}>
                      {book.name}
                    </div>
                  ))}
                </SelectTicketbookContainer>
              )}
            </DropdownContainer>
            <ButtonWrapper>{isLoaded && <Spinner size={1.5} />}</ButtonWrapper>
            <ButtonWrapper style={{ display: isLoaded ? 'none' : 'block' }}>
              <BasicButton text="글 작성 완료하기" handler={handlePostSubmit} />
            </ButtonWrapper>
          </TicketbookContainer>
        )}
        {!onTicketbook && (
          <ButtonWrapper>
            <BasicButton text="티켓북 고르기" handler={handleTicketbookOpen} />
          </ButtonWrapper>
        )}
      </BottomBar>
    </Layout>
  );
};

export default WriteTemplate;
