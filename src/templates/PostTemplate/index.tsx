import React, { useEffect, useState } from 'react';
import dompurify from 'dompurify';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Layout from '@styles/Layout';
import ProfileIcon from '@components/Common/Profile/ProfileIcon';
import FollowButton from '@components/Common/FollowButton';
import CheckMark from '@components/Common/CheckMark';
import TicketInfoBox from '@components/Common/TicketInfoBox';
import ShareButton from '@components/Common/ShareButton';
import Like from '@components/Common/Like';
import Spinner from '@src/components/Common/Spinner';

import { userProfileState } from '@stores/user';
import { SimpleProfileListType } from '@src/types/member';
import { TicketLikeType, TicketType } from '@src/types/ticket';
import { getDateString } from '@utils/string';

import { getFollowingProfile, updateFollowing, deleteFollowing } from '@apis/follow';

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
  SpinnerWrapper,
} from './style';

interface Props {
  post: TicketType | undefined;
  isMyHome: boolean;
  like: TicketLikeType;
  handlePostDelete: () => void;
  handlePostEdit: () => void;
  handleLike: () => void;
}

const PostTemplate: React.FC<Props> = ({ post, isMyHome, like, handlePostDelete, handlePostEdit, handleLike }) => {
  const myProfile = useRecoilValue(userProfileState);
  const sanitizer = dompurify.sanitize;
  const [buttonText, setButtonText] = useState('...');
  const [followingProfiles, setFollowingProfiles] = useState<SimpleProfileListType>([]);

  const getFollowingProfiles = async () => {
    const data = await getFollowingProfile(myProfile.homeId);
    if (data) {
      setFollowingProfiles(data);
    } else {
      setFollowingProfiles([]);
    }
  };

  const changeText = () => {
    if (followingProfiles) {
      if (followingProfiles.find((f) => f.targetHomeId === post?.memberHomeId)) {
        setButtonText('구독 중');
      } else {
        setButtonText('구독하기');
      }
    }
  };

  const handleFollowButton = async () => {
    if (buttonText === '구독 중') {
      const result = await deleteFollowing(myProfile.homeId, post?.memberHomeId);
      if (result) {
        setButtonText('구독하기');
      }
    } else {
      const result = await updateFollowing(myProfile.homeId, {
        targetHomeId: post?.memberHomeId,
        name: post?.memberName,
        memberImg: post?.memberImg,
        bio: post?.memberBio,
      });
      if (result) {
        setButtonText('구독 중');
      }
    }
  };

  useEffect(() => {
    if (buttonText === '...') {
      changeText();
    }
  });

  useEffect(() => {
    getFollowingProfiles();
  }, []);

  useEffect(() => {
    changeText();
  }, [followingProfiles]);

  return (
    <Layout>
      {post ? (
        <>
          <PostContainer>
            <SmallProfileContainer>
              <Link to={`/@${post.memberHomeId}`}>
                <ProfileIcon size={2.8} profileImg={post.memberImg} />
              </Link>
              <div>
                <Link to={`/@${post.memberHomeId}`}>
                  <b>{post.memberName}</b>
                </Link>
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
                <ShareButton />
                <button type="button" onClick={handleLike}>
                  <Like size={1.125} fill={like.status} />
                  <span>{like.count}</span>
                </button>
              </ShareLikeContainer>
              {isMyHome && (
                <div>
                  <button type="button" onClick={handlePostEdit}>
                    수정
                  </button>{' '}
                  •{' '}
                  <button type="button" onClick={handlePostDelete}>
                    삭제
                  </button>
                </div>
              )}
            </ButtonContainer>
            <MediumProfileContainer>
              <Link to={`/@${post.memberHomeId}`}>
                <ProfileIcon size={3.75} profileImg={post.memberImg} />
                <div>
                  <b>{post.memberName}</b>
                  <span>{post.memberBio}</span>
                </div>
              </Link>
              {!isMyHome && (
                <ButtonWrapper>
                  <FollowButton text={buttonText} handler={handleFollowButton} />
                </ButtonWrapper>
              )}
            </MediumProfileContainer>
          </PostContainer>
          <TicketsContainer />
          <PostBackground />
        </>
      ) : (
        <SpinnerWrapper>
          <Spinner size={3.5} />
        </SpinnerWrapper>
      )}
    </Layout>
  );
};

export default PostTemplate;
