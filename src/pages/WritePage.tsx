import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';

import { ticketState } from '@stores/editor';
import { userProfileState } from '@stores/user';
import { getTicketbookList } from '@apis/ticketbook';
import { createTicket } from '@apis/ticket';
import { uploadImage } from '@apis/image';
import { TicketbookListType, TicketbookType } from '@src/types/ticketbook';

import WriteTemplate from '@templates/WriteTemplate';

interface LocationStateType {
  imgObj: { file: File; url: string };
}

const initialTicketbook = { id: -1, name: '기본 티켓북', ticketbookImg: null, description: '' };

const WritePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateType;
  const ticketInfo = useRecoilValue(ticketState);
  const { homeId } = useRecoilValue(userProfileState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ticketbook, setTicketbook] = useState<TicketbookType>(initialTicketbook);
  const [ticketbooks, setTicketbooks] = useState<TicketbookListType>([]);
  const [onTicketbook, setOnTicketbook] = useState(false);
  const [onDropdown, setOnDropdown] = useState(false);
  const TicketbookContainerRef = useRef<HTMLDivElement>(null);

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

  const handlePostSubmit = async () => {
    const ticketImgUrl = await uploadImage(state.imgObj.file);
    if (ticketImgUrl) {
      const newTicket = await createTicket({
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
      if (newTicket) {
        navigate(`/~${newTicket.memberHomeId}/${newTicket.ticketId}`, { replace: true });
      }
    }
  };

  const getMyTicketbookList = async () => {
    const ticketbookList = await getTicketbookList(homeId);
    setTicketbooks(ticketbookList);
    setTicketbook(ticketbookList[0]);
  };

  useEffect(() => {
    getMyTicketbookList();
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
      ticketImg={state.imgObj.url}
      handlePostSubmit={handlePostSubmit}
      onTicketbook={onTicketbook}
      handleTicketbookOpen={handleTicketbookOpen}
      ticketbooks={ticketbooks}
      ticketbook={ticketbook}
      handleTicketbookChange={handleTicketbookChange}
      onDropdown={onDropdown}
      handleDropdownOpen={handleDropdownOpen}
      TicketbookContainerRef={TicketbookContainerRef}
    />
  );
};

export default WritePage;
