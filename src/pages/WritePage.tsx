import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';

import { ticketState } from '@stores/editor';
import { userProfileState } from '@stores/user';
import { getTicketbookList } from '@apis/ticketbook';
import { TicketbookListResType, TicketbookType } from '@src/types/ticketbook';

import WriteTemplate from '@templates/WriteTemplate';

interface LocationStateType {
  imgUrl: string;
}

const WritePage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationStateType;
  const ticketInfo = useRecoilValue(ticketState);
  const { homeId } = useRecoilValue(userProfileState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ticketbook, setTicketbook] = useState<TicketbookType>({ id: -1, name: '기본 티켓북' });
  const [ticketbooks, setTicketbooks] = useState<TicketbookListResType>([]);
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
      ticketbookId: ticketbook.id,
    });
  };

  const getMyTicketbookList = async () => {
    const ticketbookList = await getTicketbookList(homeId);
    setTicketbooks(ticketbookList);
    setTicketbook(ticketbooks[0]);
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
      ticketImg={state.imgUrl}
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
