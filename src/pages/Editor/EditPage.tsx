/* eslint-disable no-promise-executor-return */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';

import EditTemplate from '@templates/Editor/EditTemplate';
import { ticketState } from '@stores/editor';
import { getOcrTicketInfo } from '@apis/ticket';
import { templateList } from '@images/template';
import { TicketTemplateListType } from '@src/types/ticket';

interface LocationStateType {
  imgFile?: File;
}

const EditPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateType;
  const [ticketInfoIsLoaded, setTicketInfoIsLoaded] = useState(state !== null);
  const [templateIsLoaded, setTemplateIsLoaded] = useState(false);
  const [ticketInfo, setTicketInfo] = useRecoilState(ticketState);
  const [templates, setTemplates] = useState<TicketTemplateListType>(templateList);

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
      setTicketInfoIsLoaded(false);
    }
  };

  const addTemplate = (url: string) => {
    setTemplates((prev) => [...prev, { templateId: prev.length + 1, img: url }]);
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
    setTemplateIsLoaded(true);
    const imgObj = await getTicketImage();
    navigate('/write', { state: { imgObj }, replace: true });
  };

  const getTicketImage = async () => {
    const node = document.getElementById('ticket');
    if (node) {
      const canvas = await html2canvas(node, { scale: 2 });
      const imgUrl = canvas.toDataURL();
      const blob = await new Promise((resolve) => canvas.toBlob(resolve));
      return { file: new File([blob as Blob], 'ticket-image', { type: 'image/png' }), url: imgUrl };
    }
    return null;
  };

  useEffect(() => {
    if (state !== null) {
      getTicketInfo();
    }
  }, []);

  return (
    <EditTemplate
      ticketInfoIsLoaded={ticketInfoIsLoaded}
      templateIsLoaded={templateIsLoaded}
      handlePageNavigate={handlePageNavigate}
      templates={templates}
      addTemplate={addTemplate}
    />
  );
};

export default EditPage;
