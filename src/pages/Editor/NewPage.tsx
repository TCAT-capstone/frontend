import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import { templateState, ticketState } from '@stores/editor';
import NewTemplate from '@templates/Editor/NewTemplate';

const NewPage: React.FC = () => {
  const navigate = useNavigate();
  const resetTicketState = useResetRecoilState(ticketState);
  const resetTemplateState = useResetRecoilState(templateState);
  const handleFile = (file: File) => {
    navigate('/editor/edit', { state: { imgFile: file, replace: true } });
  };

  useEffect(() => {
    resetTicketState();
    resetTemplateState();
  }, []);

  return <NewTemplate handleFile={handleFile} />;
};

export default NewPage;
