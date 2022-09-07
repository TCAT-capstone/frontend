import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';

import PostTemplate from '@templates/PostTemplate';
import { deleteTicket, getLike, getTicket, updatelike } from '@apis/ticket';
import { isLoggedInState, userProfileState } from '@stores/user';
import { TicketLikeType, TicketType } from '@src/types/ticket';

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { ticketId, homeId } = useParams();
  const myProfile = useRecoilValue(userProfileState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [post, setPost] = useState<TicketType>();
  const [like, setLike] = useState<TicketLikeType>({ count: 0, status: false });

  const isMyHome = homeId === myProfile.homeId;

  const getPost = async () => {
    const ticket = await getTicket(Number(ticketId));
    if (ticket) {
      setPost(ticket);
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

  useEffect(() => {
    getPost();
    getLikeInfo();
  }, []);

  return (
    <PostTemplate
      post={post}
      isMyHome={isMyHome}
      like={like}
      handlePostDelete={handlePostDelete}
      handlePostEdit={handlePostEdit}
      handleLike={handleLike}
    />
  );
};

export default PostPage;
