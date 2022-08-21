/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Ticketbook from './Ticketbook';
import { Container } from './style';

const TicketbookList: React.FC = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 800,
    responsive: [
      {
        breakpoint: 1610,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <Ticketbook backgroundImg="0" color="PURPLE" title="1️⃣" date="22.03.04~22.09.09" />
        <Ticketbook backgroundImg="1" color="GREEN" title="2️⃣" date="22.03.04~22.09.09" />
        <Ticketbook backgroundImg="2" color="BLUE" title="3️⃣" date="22.03.04~22.09.09" />
        <Ticketbook backgroundImg="3" color="RED" title="4️⃣" date="22.03.04~22.09.09" />
        <Ticketbook backgroundImg="4" color="GREEN" title="5️⃣" date="22.03.04~22.09.09" />
      </Slider>
    </Container>
  );
};

export default TicketbookList;
