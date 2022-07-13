import React from 'react';

import Layout from '@styles/Layout';
import TextEditor from '@components/TextEditor';
import BasicButton from '@components/Common/BasicButton';

import { PostContainer, TitleInput, ButtonWrapper } from './style';

interface Props {
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  ticketImg: string;
}

const WriteTemplate: React.FC<Props> = ({ title, handleTitleChange, content, setContent, ticketImg }) => {
  return (
    <Layout>
      <PostContainer>
        <TitleInput onChange={handleTitleChange} value={title} placeholder="제목을 입력해주세요." />
        <TextEditor content={content} setContent={setContent} ticketImg={ticketImg} />
        <ButtonWrapper>
          <BasicButton text="글 작성하기" handler={() => console.log({ title, content })} />
        </ButtonWrapper>
      </PostContainer>
    </Layout>
  );
};

export default WriteTemplate;
