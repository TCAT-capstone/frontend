import React from 'react';
import NewTemplate from '@templates/Editor/NewTemplate';
import { useNavigate } from 'react-router-dom';

const NewPage: React.FC = () => {
  const navigate = useNavigate();
  const handleFile = (file: File) => {
    navigate('/editor/edit', { state: { imgFile: file, replace: true } });
  };

  return <NewTemplate handleFile={handleFile} />;
};

export default NewPage;
