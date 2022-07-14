export type TicketValidationType = 'VERIFIED' | 'UNVERIFIED';

type CategoryType = 'MUSICAL' | 'CONCERT' | 'MOVIE' | 'SPORT' | 'ETC';

export interface TicketSimpleType {
  ticketId: number;
  homeId: number;
  memberName: string;
  ticketImg: string;
  title: string;
  date: string;
  likeCount: number;
}

export type TicketListResType = TicketSimpleType[];

export interface TicketType {
  ticketId: number;
  ticketbookId: number;
  memberId: number;
  memberImg: string;
  memberName: string;
  memberBio: string;
  ticketImg: string;
  ticketValidation: TicketValidationType;
  ticketTitle: string;
  ticketDate: Date;
  ticketSeat: string;
  ticketLocation: string;
  title: string;
  content: string;
  date: string;
  category: CategoryType;
}

export interface TicketReqType {
  memberId: number;
  ticketbookId: number;
  ticketImg: string;
  ticketValidation: TicketValidationType;
  ticketTitle: string;
  ticketDate: Date;
  ticketSeat: string;
  ticketLocation: string;
  casting: string;
  title: string;
  content: string;
  category: CategoryType;
}
