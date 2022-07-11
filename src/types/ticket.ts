type TicketValidationType = 'VERIFIED' | 'UNVERIFIED';

type CategoryType = 'MUSICAL' | 'CONCERT' | 'MOVIE' | 'SPORT' | 'ETC';

export interface TicketSimpleType {
  ticketId: number;
  memberName: string;
  ticketImg: string;
  title: string;
  date: string;
  likeCount: number;
}

export type TicketListResType = TicketSimpleType[];
