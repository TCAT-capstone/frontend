import React, { useState } from 'react';

import Layout from '@styles/Layout';
import TextEditor from '@components/TextEditor';
import BasicButton from '@components/Common/BasicButton';

import arrowImg from '@images/down-arrow.svg';

import {
  PostContainer,
  TitleInput,
  BottomBar,
  Ticketbookontainer,
  DropdownContainer,
  SelectedTicketbook,
} from './style';

interface Props {
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  ticketImg: string;
  handlePostSubmit: () => void;
  onTicketbookDropdown: boolean;
  handleTicketbookDropdownOpen: () => void;
}

const WriteTemplate: React.FC<Props> = ({
  title,
  handleTitleChange,
  content,
  setContent,
  ticketImg,
  handlePostSubmit,
  onTicketbookDropdown,
  handleTicketbookDropdownOpen,
}) => {
  const [onDropdown, setOnDropdown] = useState(false);

  const handleDropdownOpen = () => {
    setOnDropdown(true);
  };

  return (
    <Layout>
      <PostContainer>
        <TitleInput onChange={handleTitleChange} value={title} placeholder="제목을 입력해주세요." />
        <TextEditor content={content} setContent={setContent} ticketImg={ticketImg} />
      </PostContainer>
      <BottomBar>
        {onTicketbookDropdown && (
          <Ticketbookontainer>
            <span>티켓북</span>
            <DropdownContainer>
              <img src={arrowImg} alt="화살표" />
              <SelectedTicketbook>기본 티켓북</SelectedTicketbook>
            </DropdownContainer>
          </Ticketbookontainer>
        )}
        {onTicketbookDropdown ? (
          <BasicButton text="완료하기" handler={handlePostSubmit} />
        ) : (
          <BasicButton text="티켓북 고르기" handler={handleTicketbookDropdownOpen} />
        )}
      </BottomBar>
    </Layout>
  );
};

export default WriteTemplate;
