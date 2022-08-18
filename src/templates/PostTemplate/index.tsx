import React from 'react';
import dompurify from 'dompurify';
import { Link } from 'react-router-dom';

import shareImg from '@images/share.svg';

import Layout from '@styles/Layout';
import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import CheckMark from '@components/Common/CheckMark';
import TicketInfoBox from '@components/Common/TicketInfoBox';
import Like from '@components/Common/Like';
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
  TicketInfoWrapper,
  ButtonContainer,
  ShareLikeContainer,
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
  const isMyHome = true;

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
            <TicketInfoWrapper>
              <TicketInfoBox
                title={post.ticketTitle}
                date={new Date(post.ticketDate)}
                location={post.ticketLocation}
                seat={post.ticketSeat}
                casting={post.casting}
              />
            </TicketInfoWrapper>
            <TicketContainer>
              <TicketImage src={post.ticketImg} alt="티켓 사진" />
              <CheckMarkWrapper>{post.ticketValidation === 'VERIFIED' && <CheckMark />}</CheckMarkWrapper>
            </TicketContainer>
            <div className="ql-container ql-snow">
              <div dangerouslySetInnerHTML={{ __html: sanitizer(post.content) }} className="ql-editor" />
            </div>
            <ButtonContainer>
              <ShareLikeContainer>
                <button type="button">
                  <img src={shareImg} alt="공유 아이콘" />
                </button>
                <button type="button">
                  <Like size={1.125} fill={false} />
                </button>
              </ShareLikeContainer>
              {isMyHome && (
                <div>
                  <button type="button">수정</button> • <button type="button">삭제</button>
                </div>
              )}
            </ButtonContainer>
            <MediumProfileContainer>
              <Link to={`/~${post.memberHomeId}`}>
                <ProfileIcon size={3.75} profileImg={post.memberImg} />
                <div>
                  <b>{post.memberName}</b>
                  <span>{post.memberBio}</span>
                </div>
              </Link>
              {!isMyHome && (
                <ButtonWrapper>
                  <BasicButton text="구독하기" handler={() => {}} />
                </ButtonWrapper>
              )}
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
