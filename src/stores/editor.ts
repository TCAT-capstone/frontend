import { atom } from 'recoil';

export const ticketState = atom({
  key: 'ticketState',
  default: { title: '', date: '', seat: '', location: '', casting: '' },
});

export const templateState = atom({
  key: 'templateState',
  default: { templateType: '', textColor: '' },
});
