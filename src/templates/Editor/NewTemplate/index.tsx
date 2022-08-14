import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Common/Header';
import EditorFrame from '@components/Editor/EditorFrame';
import DragDrop from '@components/Editor/DragDrop';

import { Layout, TextContainer, LinkWrapper } from './style';

interface Props {
  handleFile: (file: File) => void;
}

const NewTemplate: React.FC<Props> = ({ handleFile }) => {
  return (
    <Layout>
      <Header />
      <EditorFrame>
        <TextContainer>
          <h2>티켓을 등록해볼까요?</h2>
          <p>티켓 실물사진 업로드를 통해 자동으로 공연 정보를 추출할 수 있어요.</p>
        </TextContainer>
        <DragDrop handleFile={handleFile} />
        <LinkWrapper>
          <Link to="/editor/edit" replace>
            직접 입력할래요
          </Link>
        </LinkWrapper>
      </EditorFrame>
    </Layout>
  );
};

export default NewTemplate;
