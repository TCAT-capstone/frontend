import React from 'react';
import dompurify from 'dompurify';

import Layout from '@styles/Layout';
import ProfileIcon from '@components/Common/Profile/ProfileIcon';

import { TicketType } from '@src/types/ticket';
import { getDateString } from '@utils/string';

import '@styles/editor.css';
import { PostContainer, SmallProfileContainer, Title, TicketImage } from './style';

interface Props {
  post: TicketType | undefined;
}

const PostTemplate: React.FC<Props> = ({ post }) => {
  const sanitizer = dompurify.sanitize;

  return (
    <Layout>
      {post ? (
        <PostContainer>
          <SmallProfileContainer>
            <ProfileIcon size={2.8} profileImg={post.memberImg} />
            <div>
              <b>{post.memberName}</b>
              <span>{getDateString(new Date(post.date))}</span>
            </div>
          </SmallProfileContainer>
          <Title>{post.title}</Title>
          <TicketImage src={post.ticketImg} alt="티켓 사진" />
          <div className="ql-container ql-snow">
            <div dangerouslySetInnerHTML={{ __html: sanitizer(post.content) }} className="ql-editor" />
          </div>
        </PostContainer>
      ) : (
        <p>로딩중</p>
      )}
    </Layout>
  );
};

export default PostTemplate;
