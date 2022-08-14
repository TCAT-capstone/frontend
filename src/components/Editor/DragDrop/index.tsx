import React, { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { Container, FileUploadButton, TicketBox, TicketLine, DragFileDiv } from './style';

interface Props {
  handleFile: (file: File) => void;
}

const DragDrop: React.FC<Props> = ({ handleFile }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <Container dragActive={dragActive} onDragEnter={handleDrag}>
      <input
        type="file"
        id="fileUpload"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
        accept="image/jpeg, image/jpg, image/png"
      />
      <FileUploadButton type="button" onClick={handleButtonClick}>
        <TicketBox>
          <TicketLine />
        </TicketBox>
        <p>드래그하거나 클릭하여 사진 업로드 하기</p>
      </FileUploadButton>
      {dragActive && (
        <DragFileDiv onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} />
      )}
    </Container>
  );
};

export default DragDrop;
