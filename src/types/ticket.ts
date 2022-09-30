export type TicketValidationType = 'VERIFIED' | 'UNVERIFIED';

export interface TicketSimpleType {
  ticketId: number;
  homeId: number;
  memberName: string;
  ticketImg: string;
  title: string;
  date: string;
  likeCount: number;
}

export type TicketListType = TicketSimpleType[];

export interface TicketListResType {
  hasNotTicket: boolean;
  tickets: TicketListType;
}

export interface TicketType {
  ticketId: number;
  ticketbookId: number;
  memberHomeId: string;
  memberImg: string;
  memberName: string;
  memberBio: string;
  ticketImg: string;
  ticketValidation: TicketValidationType;
  ticketTitle: string;
  ticketDate: string;
  ticketSeat: string;
  ticketLocation: string;
  title: string;
  content: string;
  date: string;
  casting: string;
}

export interface CreateTicketReqType {
  ticketbookId: number;
  ticketImg: string;
  ticketValidation: TicketValidationType;
  ticketTitle: string;
  ticketDate: string;
  ticketSeat: string;
  ticketLocation: string;
  casting: string;
  title: string;
  content: string;
}

export interface UpdateTicketReqType {
  ticketbookId: number;
  title: string;
  content: string;
}

export interface OcrTicketInfoResType {
  ticetSeat: string;
  ticketDate: string;
  ticketLocation: string;
}

export type TicketTemplateListType = TicketTemplateType[];

export interface TicketTemplateType {
  templateId: number;
  img: string;
}

export interface TicketLikeType {
  status: boolean;
  count: number;
}
