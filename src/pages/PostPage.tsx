import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';

import PostTemplate from '@templates/PostTemplate';
import { deleteTicket, getLike, getTicket, updatelike } from '@apis/ticket';
import { getFollowingProfile, updateFollowing, deleteFollowing } from '@apis/follow';
import { isLoggedInState, userProfileState } from '@stores/user';
import { SimpleProfileListType } from '@src/types/member';
import { TicketLikeType, TicketType } from '@src/types/ticket';
import ErrorPage from './ErrorPage';

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { ticketId, homeId } = useParams();
  const myProfile = useRecoilValue(userProfileState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [post, setPost] = useState<TicketType>();
  const [like, setLike] = useState<TicketLikeType>({ count: 0, status: false });
  const [noSuchPost, setNoSuchPost] = useState(false);
  const [buttonText, setButtonText] = useState('...');
  const [followingProfiles, setFollowingProfiles] = useState<SimpleProfileListType>([]);

  const isMyHome = homeId === myProfile.homeId;

  const getPost = async () => {
    const ticket = await getTicket(Number(ticketId));
    if (ticket) {
      if (ticket.memberHomeId !== homeId) {
        setNoSuchPost(true);
      } else {
        setPost(ticket);
      }
    } else {
      setNoSuchPost(true);
    }
  };

  const handlePostDelete = async () => {
    const result = await deleteTicket(Number(ticketId));
    if (result) {
      navigate(-1);
    }
  };

  const handlePostEdit = () => {
    navigate('/write', { state: { ticketId, post }, replace: true });
  };

  const getLikeInfo = async () => {
    const like = await getLike(Number(ticketId));
    if (like) {
      setLike(like);
    }
  };

  const handleLike = async () => {
    if (!isLoggedIn) {
      toast.error('로그인이 필요합니다!');
      return;
    }
    const like = await updatelike(Number(ticketId));
    if (like) {
      setLike(like);
    }
  };

  const getFollowingProfiles = async () => {
    if (isLoggedIn) {
      const data = await getFollowingProfile(myProfile.homeId);
      if (data) {
        setFollowingProfiles(data);
      } else {
        setFollowingProfiles([]);
      }
    }
  };

  const changeText = () => {
    if (followingProfiles.find((f) => f.targetHomeId === post?.memberHomeId)) {
      setButtonText('구독 중');
    } else {
      setButtonText('구독하기');
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
    getPost();
    getLikeInfo();
    getFollowingProfiles();
  }, []);

  useEffect(() => {
    if (buttonText === '...') {
      changeText();
    }
  });

  useEffect(() => {
    getFollowingProfiles();
  }, [isLoggedIn]);

  useEffect(() => {
    changeText();
  }, [followingProfiles]);

  return noSuchPost ? (
    <ErrorPage />
  ) : (
    <PostTemplate
      post={post}
      isMyHome={isMyHome}
      isLoggedIn={isLoggedIn}
      like={like}
      handlePostDelete={handlePostDelete}
      handlePostEdit={handlePostEdit}
      handleLike={handleLike}
      buttonText={buttonText}
      handleFollowButton={handleFollowButton}
    />
  );
};

export default PostPage;
