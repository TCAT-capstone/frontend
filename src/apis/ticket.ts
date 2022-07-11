import fetchApi from '@utils/fetch';

import { TicketListResType } from '@src/types/ticket';

export const getTrendTickets = async (): Promise<TicketListResType> => {
  try {
    const res = await fetchApi.get('/api/tickets/trending');
    if (res.status === 404) throw new Error('error');
    const { tickets } = await res.json();
    return tickets;
  } catch (err) {
    return [];
  }
};

export const getTicketbookTickets = async (ticketbookId: number): Promise<TicketListResType> => {
  try {
    const res = await fetchApi.get(`/api/ticketbooks/${ticketbookId}/tickets`);
    if (res.status === 404) throw new Error('error');
    const { tickets } = await res.json();
    return tickets;
  } catch (err) {
    return [];
  }
};
