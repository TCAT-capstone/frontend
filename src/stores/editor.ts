import { atom } from 'recoil';

export const ticketState = atom({
  key: 'ticketState',
  default: { title: '', date: '', seat: '', location: '', casting: '', validation: false },
});

export const templateState = atom<TemplateStateType>({
  key: 'templateState',
  default: { templateId: 1, textColor: 'black' },
});

interface TemplateStateType {
  templateId: number;
  textColor: 'black' | 'white';
}
