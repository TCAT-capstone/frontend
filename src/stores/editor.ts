import { atom } from 'recoil';

export const ticketState = atom({
  key: 'ticketState',
  default: { title: '', date: '', seat: '', location: '', casting: '', validation: false },
});

export const templateState = atom({
  key: 'templateState',
  default: { templateId: 1, textColor: '' },
});
