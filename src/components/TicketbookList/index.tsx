/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './style';

interface Props {
  children: React.ReactNode;
}

const TicketbookList: React.FC<Props> = ({ children }) => {
  const ticketbookCount = React.Children.count(children);
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0',
    infinite: ticketbookCount > 5,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 800,
    responsive: [
      {
        breakpoint: 1610,
        settings: {
          infinite: ticketbookCount > 3,
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

export default TicketbookList;
