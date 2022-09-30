import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ticketState } from '@stores/editor';
import { userTicketbooksState } from '@stores/user';
import { createTicket, updateTicket } from '@apis/ticket';
import { uploadImage } from '@apis/image';

import WriteTemplate from '@templates/WriteTemplate';
import { TicketType } from '@src/types/ticket';
import { TicketbookType } from '@src/types/ticketbook';

interface LocationStateType {
  imgObj: { file: File; url: string };
  ticketId: number;
  post: TicketType;
}

const initialTicketbook = { id: -1, name: '기본 티켓북', ticketbookImg: '', description: '' };

const WritePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateType;
  const ticketInfo = useRecoilValue(ticketState);
  const userTicketbooks = useRecoilValue(userTicketbooksState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ticketbook, setTicketbook] = useState<TicketbookType>(initialTicketbook);
  const [onTicketbook, setOnTicketbook] = useState(false);
  const [onDropdown, setOnDropdown] = useState(false);
  const TicketbookContainerRef = useRef<HTMLDivElement>(null);

  const isUpdateMode = state.ticketId !== undefined;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTicketbookChange = (e: MouseEvent, book: TicketbookType) => {
    e.stopPropagation();
    setTicketbook(book);
    setOnDropdown(false);
  };

  const handleTicketbookOpen = (e: MouseEvent) => {
    e.stopPropagation();
    setOnTicketbook(true);
  };

  const handleDropdownOpen = () => {
    setOnDropdown(true);
  };

  const handleClickOutside = ({ target }: { target: any }) => {
    if (onDropdown && TicketbookContainerRef.current && !TicketbookContainerRef.current.contains(target)) {
      setOnDropdown(false);
    }
    if (onTicketbook && TicketbookContainerRef.current && !TicketbookContainerRef.current.contains(target)) {
      setOnTicketbook(false);
    }
  };

  const validatePost = () => {
    if (title === '') {
      toast.error('제목을 입력해주세요!');
      return false;
    }
    if (content === '') {
      toast.error('내용을 입력해주세요!');
      return false;
    }
    return true;
  };

  const handlePostSubmit = async () => {
    let newTicket;
    if (!validatePost()) return;
    if (isUpdateMode) {
      newTicket = await updateTicket(state.post.ticketId, { ticketbookId: ticketbook.id, title, content });
    } else {
      const ticketImgUrl = await uploadImage(state.imgObj.file);
      if (ticketImgUrl) {
        newTicket = await createTicket({
          title,
          content,
          ticketImg: ticketImgUrl,
          ticketTitle: ticketInfo.title,
          ticketDate: ticketInfo.date,
          ticketSeat: ticketInfo.seat,
          ticketLocation: ticketInfo.location,
          ticketValidation: ticketInfo.validation ? 'VERIFIED' : 'UNVERIFIED',
          casting: ticketInfo.casting,
          ticketbookId: ticketbook.id,
        });
      }
    }
    if (newTicket) {
      navigate(`/@${newTicket.memberHomeId}/${newTicket.ticketId}`, { replace: true });
    }
  };

  useEffect(() => {
    if (isUpdateMode) {
      setTitle(state.post.title);
      setContent(state.post.content);
      setTicketbook(userTicketbooks.filter((book) => book.id === state.post.ticketbookId)[0]);
    } else {
      setTicketbook(userTicketbooks[0]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <WriteTemplate
      title={title}
      handleTitleChange={handleTitleChange}
      content={content}
      setContent={setContent}
      ticketImg={isUpdateMode ? state.post?.ticketImg : state.imgObj?.url}
      handlePostSubmit={handlePostSubmit}
      onTicketbook={onTicketbook}
      handleTicketbookOpen={handleTicketbookOpen}
      ticketbook={ticketbook}
      handleTicketbookChange={handleTicketbookChange}
      onDropdown={onDropdown}
      handleDropdownOpen={handleDropdownOpen}
      TicketbookContainerRef={TicketbookContainerRef}
    />
  );
};

export default WritePage;
