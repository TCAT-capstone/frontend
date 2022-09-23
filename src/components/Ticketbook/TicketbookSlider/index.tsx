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
  cloneTicketbooks: () => void;
  changeCurrTicketbookId: (idx: number) => void;
}

const TicketbookSlider: React.FC<Props> = ({ ticketbooks, cloneTicketbooks, changeCurrTicketbookId }) => {
  const [settings, setSettings] = useState({});
  const ticketbookCount = ticketbooks.length;

  useEffect(() => {
    cloneTicketbooks();
    if (ticketbookCount >= 5) {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 5,
        speed: 800,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
        beforeChange: (current: any, next: any) => {
          if (next > ticketbookCount - 1) {
            changeCurrTicketbookId(next % ticketbookCount);
          } else {
            changeCurrTicketbookId(next);
          }
        },
      });
    } else if (ticketbookCount > 1 && ticketbookCount < 5) {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 800,
        beforeChange: (current: any, next: any) => {
          if (next > ticketbookCount - 1) {
            changeCurrTicketbookId(next % ticketbookCount);
          } else {
            changeCurrTicketbookId(next);
          }
        },
      });
    } else {
      setSettings({
        className: 'center',
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 5,
        speed: 800,
      });
    }
  }, [ticketbooks]);

  return (
    <Container>
      {ticketbookCount > 0 && (
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
