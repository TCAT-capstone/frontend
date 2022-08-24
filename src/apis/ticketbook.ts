import fetchApi from '@utils/fetch';
import { TicketbookListType } from '@src/types/ticketbook';

export const getTicketbookList = async (homeId: string): Promise<TicketbookListType> => {
  try {
    const res = await fetchApi.get(`/api/members/${homeId}/ticketbooks`);
    if (res.status !== 200) throw new Error('error');
    const { ticketbooks } = await res.json();
    return ticketbooks;
  } catch (err) {
    return [];
  }
};
