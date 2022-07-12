import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import './editor.css';

import ticketSampleImg from '@images/sample-ticket-img.png';

import { Container, TitleInput, TicketImage } from './style';

const TextEditor: React.FC = () => {
  const quillRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState('');

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          [{ align: [] }, { color: [] }, { background: [] }],
        ],
        handlers: {
          // 이미지 핸들러 설정
        },
      },
    }),
    [],
  );

  return (
    <Container>
      <TitleInput placeholder="제목을 입력해주세요." />
      <TicketImage src={ticketSampleImg} alt="티켓 사진" />
      <ReactQuill
        theme="snow"
        modules={modules}
        value={content}
        onChange={setContent}
        placeholder="추억을 작성해보세요."
      />
    </Container>
  );
};

export default TextEditor;
