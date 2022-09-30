/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TicketbookListType } from '@src/types/ticketbook';
import { Container, TicketbookWrapper } from './style';
import Ticketbook from '../Ticketbook';

interface Props {
  ticketbooks: TicketbookListType;
  initialTicketbookCount: number;
  cloneTicketbooks: () => void;
  changeCurrTicketbookId: (idx: number) => void;
}

const TicketbookSlider: React.FC<Props> = ({
  ticketbooks,
  initialTicketbookCount,
  cloneTicketbooks,
  changeCurrTicketbookId,
}) => {
  const ticketbookCount = ticketbooks.length;
  const isInfinite = initialTicketbookCount !== 1;
  const mySlidesToShow = initialTicketbookCount >= 2 && initialTicketbookCount <= 3 ? 3 : 5;
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0',
    infinite: isInfinite,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: mySlidesToShow,
    speed: 800,
    responsive: [
      {
        breakpoint: 1610,
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
  };

  useEffect(() => {
    cloneTicketbooks();
  }, [ticketbooks]);

  return (
    <Container initialTicketbookCount={initialTicketbookCount}>
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
