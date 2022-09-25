import { atom, selector } from 'recoil';
import { TicketbookListType } from '@src/types/ticketbook';

export const userProfileState = atom({
  key: 'userProfileState',
  default: { id: -1, name: '', bio: '', email: '', ticketCount: 0, likeCount: 0, memberImg: '', homeId: '' },
});

export const isLoggedInState = selector({
  key: 'isLoggedInState',
  get: ({ get }) => {
    const { email } = get(userProfileState);
    return email !== '';
  },
});

export const userTicketbooksState = atom({
  key: 'userTicketbooksState',
  default: [] as TicketbookListType,
});
