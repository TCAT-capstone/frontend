import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TicketbookType } from '@src/types/ticketbook';
import Ticketbook from '../Ticketbook';
import { Container, InputContainer, TextInput, FileInputContainer } from './style';

interface Props {
  currTicketbook: TicketbookType;
  newName: string;
  newDescription: string;
  newImageUrl: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFile: (file: File) => void;
}

const TicketbookEditor: React.FC<Props> = ({
  currTicketbook,
  newName,
  newDescription,
  newImageUrl,
  handleNameChange,
  handleDescriptionChange,
  handleFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = useState('');

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImageName(e.target.files[0].name);
      await handleFile(e.target.files[0]);
      e.target.value = '';
    }
  };

  useEffect(() => {
    setImageName('');
  }, [currTicketbook]);

  return (
    <Container>
      <Ticketbook backgroundImg={newImageUrl} name={newName} description={newDescription} size="small" />
      <InputContainer>
        <b>티켓북 제목</b>
        <TextInput type="text" value={newName} onChange={handleNameChange} placeholder="티켓북 제목을 입력하세요." />
      </InputContainer>
      <InputContainer>
        <b>설명</b>
        <TextInput
          type="text"
          value={newDescription}
          onChange={handleDescriptionChange}
          placeholder="티켓북 설명을 입력하세요."
        />
      </InputContainer>
      <InputContainer>
        <b>사진</b>
        <FileInputContainer>
          <span>{imageName}</span>
          <button type="button" onClick={handleButtonClick}>
            파일선택
          </button>
          <input
            type="file"
            id="fileUpload"
            ref={inputRef}
            onChange={handleChange}
            style={{ display: 'none' }}
            accept="image/jpeg, image/jpg, image/png"
          />
        </FileInputContainer>
      </InputContainer>
    </Container>
  );
};

export default TicketbookEditor;
