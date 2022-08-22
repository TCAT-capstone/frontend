import fetchApi from '@utils/fetch';
import { TicketbookListResType } from '@src/types/ticketbook';

export const getTicketbookList = async (homeId: string): Promise<TicketbookListResType> => {
  try {
    const res = await fetchApi.get(`/api/members/${homeId}/ticketbooks`);
    if (res.status !== 200) throw new Error('error');
    const { ticketbooks } = await res.json();
    return ticketbooks;
  } catch (err) {
    return [];
  }
};
