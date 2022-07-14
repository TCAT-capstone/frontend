import React from 'react';
import dompurify from 'dompurify';
import { Link } from 'react-router-dom';

import Layout from '@styles/Layout';
import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import CheckMark from '@components/Common/CheckMark';
import BasicButton from '@components/Common/BasicButton';

import { TicketType } from '@src/types/ticket';
import { getDateString } from '@utils/string';

import '@styles/editor.css';
import {
  PostContainer,
  SmallProfileContainer,
  Title,
  TicketContainer,
  TicketImage,
  CheckMarkWrapper,
  MediumProfileContainer,
  ButtonWrapper,
  TicketsContainer,
  PostBackground,
} from './style';

interface Props {
  post: TicketType | undefined;
}

const PostTemplate: React.FC<Props> = ({ post }) => {
  const sanitizer = dompurify.sanitize;

  return (
    <Layout>
      {post ? (
        <>
          <PostContainer>
            <SmallProfileContainer>
              <ProfileIcon size={2.8} profileImg={post.memberImg} />
              <div>
                <b>{post.memberName}</b>
                <span>{getDateString(new Date(post.date))}</span>
              </div>
            </SmallProfileContainer>
            <Title>{post.title}</Title>
            <TicketContainer>
              <TicketImage src={post.ticketImg} alt="티켓 사진" />
              <CheckMarkWrapper>{post.ticketValidation === 'VERIFIED' && <CheckMark />}</CheckMarkWrapper>
            </TicketContainer>
            <div className="ql-container ql-snow">
              <div dangerouslySetInnerHTML={{ __html: sanitizer(post.content) }} className="ql-editor" />
            </div>
            <MediumProfileContainer>
              <Link to={`/@${post.memberHomeId}`}>
                <ProfileIcon size={3.75} profileImg={post.memberImg} />
                <div>
                  <b>{post.memberName}</b>
                  <span>{post.memberBio}</span>
                </div>
              </Link>
              <ButtonWrapper>
                <BasicButton text="구독하기" handler={() => {}} />
              </ButtonWrapper>
            </MediumProfileContainer>
          </PostContainer>
          <TicketsContainer />
          <PostBackground />
        </>
      ) : (
        <p>로딩중</p>
      )}
    </Layout>
  );
};

export default PostTemplate;
