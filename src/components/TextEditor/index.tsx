import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { RangeStatic } from 'quill';

import CheckMark from '@components/Common/CheckMark';
import { uploadImage } from '@apis/image';
import { TicketValidationType } from '@src/types/ticket';

import '@styles/editor.css';
import { Container, TicketContainer, TicketImage, CheckMarkWrapper } from './style';

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  ticketImg: string;
  ticketValidation: TicketValidationType;
}

const TextEditor: React.FC<Props> = ({ content, setContent, ticketImg, ticketValidation }) => {
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    input.onchange = async () => {
      const { files } = input;
      if (files) {
        const imgUrl = await uploadImage(files[0]);
        if (quillRef.current && imgUrl) {
          const { index } = quillRef.current.getEditor().getSelection() as RangeStatic;
          const quillEditor = quillRef.current.getEditor();
          quillEditor.setSelection(index, 1);
          quillEditor.clipboard.dangerouslyPasteHTML(index, `<img src=${imgUrl} alt='이미지'} />`);
        }
      }
    };
  };

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
          image: imageHandler,
        },
      },
    }),
    [],
  );

  return (
    <Container>
      <TicketContainer>
        <TicketImage src={ticketImg} alt="티켓 사진" />
        <CheckMarkWrapper>{ticketValidation === 'VERIFIED' && <CheckMark />}</CheckMarkWrapper>
      </TicketContainer>
      <ReactQuill
        ref={quillRef}
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
