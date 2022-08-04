import React from 'react';

import Header from '@components/Common/Header';
import EditorFrame from '@components/Editor/EditorFrame';

import { Layout } from './style';

const EditTemplate: React.FC = () => {
  return (
    <Layout>
      <Header />
      <EditorFrame>
        <div />
      </EditorFrame>
    </Layout>
  );
};

export default EditTemplate;
