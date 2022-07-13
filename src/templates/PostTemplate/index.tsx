import React from 'react';

import Layout from '@styles/Layout';
import { TicketType } from '@src/types/ticket';

interface Props {
  post: TicketType | undefined;
}

const PostTemplate: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      {post ? (
        <div>
          <h1>{post.title}</h1>
        </div>
      ) : (
        <p>로딩중</p>
      )}
    </Layout>
  );
};

export default PostTemplate;
