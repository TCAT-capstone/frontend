import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';

import WriteTemplate from '@templates/WriteTemplate';
import { ticketState } from '@stores/editor';

interface LocationStateType {
  imgUrl: string;
}

const WritePage: React.FC = () => {
  const ticketInfo = useRecoilValue(ticketState);
  const location = useLocation();
  const state = location.state as LocationStateType;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePostSubmit = () => {
    console.log({
      title,
      content,
      ticketImg: state.imgUrl,
      ticketTitle: ticketInfo.title,
      ticketDate: ticketInfo.date,
      ticketSeat: ticketInfo.seat,
      ticketLocation: ticketInfo.location,
      ticketValidation: ticketInfo.validation,
      casting: ticketInfo.casting,
      ticketbookId: 1,
    });
  };

  return (
    <WriteTemplate
      title={title}
      handleTitleChange={handleTitleChange}
      content={content}
      setContent={setContent}
      ticketImg={state.imgUrl}
      handlePostSubmit={handlePostSubmit}
    />
  );
};

export default WritePage;
