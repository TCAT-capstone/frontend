import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import domtoimage from 'dom-to-image';
import { toast } from 'react-toastify';

import EditTemplate from '@templates/Editor/EditTemplate';
import { ticketState } from '@stores/editor';
import { getOcrTicketInfo } from '@src/apis/ticket';
import { TemplateEx, TicketTemplateListType } from '@src/types/ticket';

interface LocationStateType {
  imgFile?: File;
}

const EditPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateType;
  const [isLoading, setIsLoading] = useState(state !== null);
  const [ticketInfo, setTicketInfo] = useRecoilState(ticketState);
  const [templates, setTemplates] = useState<TicketTemplateListType>([]);

  const getTicketInfo = async () => {
    if (state.imgFile) {
      const ticketInfo = await getOcrTicketInfo(state.imgFile);
      if (ticketInfo) {
        setTicketInfo((prev) => {
          return {
            ...prev,
            seat: ticketInfo.ticetSeat,
            date: `${ticketInfo.ticketDate}T18:00`,
            location: ticketInfo.ticketLocation,
          };
        });
      }
      setIsLoading(false);
    }
  };

  const getTemplates = async () => {
    setTemplates(TemplateEx);
  };

  const validateTicketInfo = () => {
    if (
      ticketInfo.title === '' ||
      ticketInfo.date === '' ||
      ticketInfo.location === '' ||
      ticketInfo.seat === '' ||
      ticketInfo.casting === ''
    ) {
      toast.error('티켓 정보가 비어있어요!');
      return false;
    }
    return true;
  };

  const handlePageNavigate = async () => {
    if (!validateTicketInfo()) return;
    const imgObj = await getTicketImage();
    navigate('/write', { state: { imgObj }, replace: true });
  };

  const getTicketImage = async () => {
    const node = document.getElementById('ticket');
    if (node) {
      const imgUrl = await domtoimage.toPng(node);
      const res = await fetch(imgUrl);
      const blob = await res.blob();
      return { file: new File([blob], 'ticket-image', { type: 'image/png' }), url: imgUrl };
    }
    return '';
  };

  useEffect(() => {
    if (state !== null) {
      getTicketInfo();
    }
    getTemplates();
  }, []);

  return <EditTemplate isLoading={isLoading} handlePageNavigate={handlePageNavigate} templates={templates} />;
};

export default EditPage;
