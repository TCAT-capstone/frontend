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
  const [duplicateTicketbooks, setDuplicateTicketbooks] = useState(ticketbooks);
  let ticketbookCount = ticketbooks.length;

  const cloneTicketbooks = () => {
    const addedLast = [];
    let index = 0;
    while (index < ticketbooks.length) {
      addedLast.push(ticketbooks[index % ticketbooks.length]);
      index += 1;
    }
    setDuplicateTicketbooks([...ticketbooks, ...addedLast]);
  };

  useEffect(() => {
    if (ticketbookCount <= 5 && ticketbookCount > 1) {
      cloneTicketbooks();
    }
    ticketbookCount = duplicateTicketbooks.length;
    console.log('ticketbookCount', ticketbookCount);
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
        slidesToScroll: 1,
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
          console.log('current', current);
          console.log('next', next);
          if (next > ticketbooks.length - 1) {
            changeCurrTicketbookId(next % ticketbooks.length);
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
        slidesToScroll: 1,
        speed: 800,
        beforeChange: (current: any, next: any) => {
          console.log('current', current);
          console.log('next', next);
          if (next > ticketbooks.length - 1) {
            changeCurrTicketbookId(next % ticketbooks.length);
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
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
      });
    }
  }, [ticketbooks]);

  return (
    <Container>
      {ticketbooks.length > 0 && (
        <Slider {...settings}>
          {duplicateTicketbooks.map((ticketbook) => (
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
