import fetchApi from '@utils/fetch';
import {
  CreateTicketReqType,
  OcrTicketInfoResType,
  TicketListResType,
  TicketType,
  UpdateTicketReqType,
  TicketLikeType,
} from '@src/types/ticket';

export const getTrendTickets = async (
  cursorId: number | null,
  cursorLikeCount: number | null,
): Promise<TicketListResType | false> => {
  try {
    const res = await fetchApi.get(
      `/api/tickets/trending?cursorId=${cursorId === null ? '' : cursorId}&cursorLikeCount=${
        cursorLikeCount === null ? '' : cursorLikeCount
      }`,
    );
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const getSearchTickets = async (): Promise<TicketListResType | false> => {
  try {
    const res = await fetchApi.get('/api/tickets');
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const getTicketbookTickets = async (
  ticketbookId: number,
  cursorId: number | null,
): Promise<TicketListResType | false> => {
  try {
    const res = await fetchApi.get(
      `/api/ticketbooks/${ticketbookId}/tickets?cursorId=${cursorId === null ? '' : cursorId}`,
    );
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
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

export const deleteTicket = async (ticketId: number): Promise<boolean> => {
  try {
    const res = await fetchApi.delete(`/api/tickets/${ticketId}`);
    if (res.status !== 200) throw new Error('error');
    return true;
  } catch (err) {
    return false;
  }
};

export const updateTicket = async (
  ticketId: number,
  updateTicketReqType: UpdateTicketReqType,
): Promise<TicketType | false> => {
  try {
    const res = await fetchApi.patch(`/api/tickets/${ticketId}`, updateTicketReqType);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const getLike = async (ticketId: number): Promise<TicketLikeType | false> => {
  try {
    const res = await fetchApi.get(`/api/tickets/${ticketId}/like`);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const updatelike = async (ticketId: number): Promise<TicketLikeType | false> => {
  try {
    const res = await fetchApi.post(`/api/tickets/${ticketId}/like`, {});
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};
