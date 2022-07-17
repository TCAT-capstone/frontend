import fetchApi from '@utils/fetch';

import { TicketListResType, TicketType } from '@src/types/ticket';

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
    const data = await res.json();
    return data;
  } catch (err) {
    return false;
  }
};
