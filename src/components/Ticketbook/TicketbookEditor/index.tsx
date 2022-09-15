import React, { ChangeEvent, useRef, useState } from 'react';
import { TicketbookType } from '@src/types/ticketbook';
import Ticketbook from '../Ticketbook';
import { Container, InputContainer, TextInput, FileInputContainer } from './style';

interface Props {
  currTicketbook: TicketbookType;
}

const TicketbookEditor: React.FC<Props> = ({ currTicketbook }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = useState('');

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  return (
    <Container>
      <Ticketbook
        backgroundImg={currTicketbook.ticketbookImg as string}
        name={currTicketbook.name}
        description={currTicketbook.description}
        size="small"
      />
      <InputContainer>
        <b>티켓북 제목</b>
        <TextInput type="text" value={currTicketbook.name} placeholder="티켓북 제목을 입력하세요." />
      </InputContainer>
      <InputContainer>
        <b>설명</b>
        <TextInput type="text" value={currTicketbook.description} placeholder="티켓북 설명을 입력하세요." />
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
