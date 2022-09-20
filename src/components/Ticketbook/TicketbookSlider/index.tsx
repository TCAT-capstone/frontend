/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TicketbookListType } from '@src/types/ticketbook';
import { Container, TicketbookWrapper } from './style';
import Ticketbook from '../Ticketbook';

interface Props {
  ticketbooks: TicketbookListType;
  changeCurrTicketbookId: (idx: number) => void;
}

const TicketbookSlider: React.FC<Props> = ({ ticketbooks, changeCurrTicketbookId }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const ticketbookCount = ticketbooks.length;
    console.log('ticketbookCount', ticketbookCount);
    if (ticketbookCount >= 5) {
      setSettings({
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
        beforeChange: (current: any, next: any) => {
          console.log(next);
          changeCurrTicketbookId(next);
        },
      });
    } else if (ticketbookCount === 4) {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        beforeChange: (current: any, next: any) => {
          console.log(next);
          changeCurrTicketbookId(next);
        },
      });
    } else if (ticketbookCount === 3) {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        beforeChange: (current: any, next: any) => {
          console.log(next);
          changeCurrTicketbookId(next);
        },
      });
    } else if (ticketbookCount === 2) {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        beforeChange: (current: any, next: any) => {
          console.log(next);
          changeCurrTicketbookId(next);
        },
      });
    } else {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        beforeChange: (current: any, next: any) => {
          console.log(next);
          changeCurrTicketbookId(next);
        },
      });
    }
  }, [ticketbooks]);

  return (
    <Container>
      {ticketbooks.length > 0 && (
        <Slider {...settings}>
          {ticketbooks.map((ticketbook) => (
            <TicketbookWrapper key={`ticketbook${ticketbook.id}`}>
              <Ticketbook
                backgroundImg={ticketbook.ticketbookImg as string}
                size="medium"
                name={ticketbook.name}
                description={ticketbook.description}
              />
            </TicketbookWrapper>
          ))}
        </Slider>
      )}
    </Container>
  );
};

export default TicketbookSlider;
