import fetchApi from '@utils/fetch';
import { OcrTicketInfoResType, TicketListResType, TicketType } from '@src/types/ticket';

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
