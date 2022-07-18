import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostTemplate from '@templates/PostTemplate';

import { getTicket } from '@apis/ticket';
import { TicketType } from '@src/types/ticket';

const PostPage: React.FC = () => {
  const { ticketId } = useParams();
  const [post, setPost] = useState<TicketType>();

  const getPost = async () => {
    const data = await getTicket(Number(ticketId));
    if (data) {
      setPost(data);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return <PostTemplate post={post} />;
};

export default PostPage;
