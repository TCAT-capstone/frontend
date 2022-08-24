import fetchApi from '@utils/fetch';
import { CreateTicketReqType, OcrTicketInfoResType, TicketListResType, TicketType } from '@src/types/ticket';

export const getTrendTickets = async (): Promise<TicketListResType> => {
  try {
    const res = await fetchApi.get('/api/tickets/trending');
    if (res.status !== 200) throw new Error('error');
    const { tickets } = await res.json();
    return tickets;
  } catch (err) {
    return [];
  }
};

export const getSearchTickets = async (): Promise<TicketListResType> => {
  try {
    const res = await fetchApi.get('/api/tickets');
    if (res.status !== 200) throw new Error('error');
    const { tickets } = await res.json();
    return tickets;
  } catch (err) {
    return [];
  }
};

export const getTicketbookTickets = async (ticketbookId: number): Promise<TicketListResType> => {
  try {
    const res = await fetchApi.get(`/api/ticketbooks/${ticketbookId}/tickets`);
    if (res.status !== 200) throw new Error('error');
    const { tickets } = await res.json();
    return tickets;
  } catch (err) {
    return [];
  }
};

export const getTicket = async (ticketId: number): Promise<TicketType | false> => {
  try {
    const res = await fetchApi.get(`/api/tickets/${ticketId}`);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const getOcrTicketInfo = async (file: File): Promise<OcrTicketInfoResType | false> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetchApi.postOcrFile('/ocr', formData);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const createTicket = async (createTicketReq: CreateTicketReqType): Promise<TicketType | false> => {
  try {
    const res = await fetchApi.post('/api/tickets', createTicketReq);
    if (res.status !== 201) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};
