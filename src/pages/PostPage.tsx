import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { deleteTicket, getTicket } from '@apis/ticket';

import PostTemplate from '@templates/PostTemplate';
import { TicketType } from '@src/types/ticket';
import { userProfileState } from '@src/stores/user';

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { ticketId, homeId } = useParams();
  const myProfile = useRecoilValue(userProfileState);
  const [post, setPost] = useState<TicketType>();

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
      navigate(`/~${homeId}`, { replace: true });
    }
  };

  const handlePostEdit = () => {
    navigate('/write', { state: { ticketId, post }, replace: true });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostTemplate post={post} isMyHome={isMyHome} handlePostDelete={handlePostDelete} handlePostEdit={handlePostEdit} />
  );
};

export default PostPage;
