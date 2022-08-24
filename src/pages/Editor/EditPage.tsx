import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import domtoimage from 'dom-to-image';

import EditTemplate from '@templates/Editor/EditTemplate';
import { ticketState } from '@stores/editor';
import { getOcrTicketInfo } from '@src/apis/ticket';

interface LocationStateType {
  imgFile?: File;
}

const EditPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateType;
  const [isLoading, setIsLoading] = useState(state !== null);
  const setTicketInfo = useSetRecoilState(ticketState);

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

  const handlePageNavigate = async () => {
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
  }, []);

  return <EditTemplate isLoading={isLoading} handlePageNavigate={handlePageNavigate} />;
};

export default EditPage;
