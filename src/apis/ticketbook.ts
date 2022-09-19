import fetchApi from '@utils/fetch';
import { TicketbookListType, TicketbooksReqType, TicketbooksResType } from '@src/types/ticketbook';

export const getTicketbooks = async (homeId: string): Promise<TicketbookListType> => {
  try {
    const res = await fetchApi.get(`/api/members/${homeId}/ticketbooks`);
    if (res.status !== 200) throw new Error('error');
    const { ticketbooks } = await res.json();
    return ticketbooks;
  } catch (err) {
    return [];
  }
};

export const updateTicketbooks = async (
  updateTicketReqType: TicketbooksReqType,
): Promise<TicketbookListType | false> => {
  try {
    const res = await fetchApi.put(`/api/ticketbooks`, updateTicketReqType);
    if (res.status !== 201) throw new Error('error');
    const { ticketbooks } = await res.json();
    return ticketbooks;
  } catch (err) {
    return false;
  }
};
