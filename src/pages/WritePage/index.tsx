import React, { useState } from 'react';

import WriteTemplate from '@templates/WriteTemplate';
import ticketSampleImg from '@images/sample-ticket-img.png';

const WritePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <WriteTemplate
      title={title}
      handleTitleChange={handleTitleChange}
      content={content}
      setContent={setContent}
      ticketImg={ticketSampleImg}
    />
  );
};

export default WritePage;
