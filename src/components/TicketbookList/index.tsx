/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TicketbookListType } from '@src/types/ticketbook';
import { Container } from './style';
import Ticketbook from './Ticketbook';

interface Props {
  ticketbooks: TicketbookListType;
}

const TicketbookList: React.FC<Props> = ({ ticketbooks }) => {
  const ticketbookCount = ticketbooks.length;
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
      <Slider {...settings}>
        {ticketbooks.map((ticketbook) => (
          <Ticketbook
            backgroundImg={ticketbook.ticketbookImg as string}
            size="medium"
            name={ticketbook.name}
            description={ticketbook.description}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default TicketbookList;
