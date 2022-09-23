export type TicketbookListType = TicketbookType[];

export interface TicketbookType {
  id: number;
  name: string;
  ticketbookImg: string;
  description: string;
}

export interface TicketbooksReqType {
  sequence: string;
  append: TicketbookListType;
  update: TicketbookListType;
  delete: TicketbookListType;
}

export interface TicketbooksResType {
  ticketbooks: TicketbookListType;
  sequence: string;
}
