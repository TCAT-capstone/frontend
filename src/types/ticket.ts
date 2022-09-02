export type TicketValidationType = 'VERIFIED' | 'UNVERIFIED';

export interface TicketSimpleType {
  ticketId: number;
  homeId: number;
  memberName: string;
  ticketImg: string;
  title: string;
  date: string;
  likeCount: number;
}

export type TicketListType = TicketSimpleType[];

export interface TicketListResType {
  hasNotTicket: boolean;
  tickets: TicketListType;
}

export interface TicketType {
  ticketId: number;
  ticketbookId: number;
  memberId: number;
  memberHomeId: string;
  memberImg: string;
  memberName: string;
  memberBio: string;
  ticketImg: string;
  ticketValidation: TicketValidationType;
  ticketTitle: string;
  ticketDate: string;
  ticketSeat: string;
  ticketLocation: string;
  title: string;
  content: string;
  date: string;
  casting: string;
}

export interface CreateTicketReqType {
  ticketbookId: number;
  ticketImg: string;
  ticketValidation: TicketValidationType;
  ticketTitle: string;
  ticketDate: string;
  ticketSeat: string;
  ticketLocation: string;
  casting: string;
  title: string;
  content: string;
}

export interface UpdateTicketReqType {
  ticketbookId: number;
  title: string;
  content: string;
}

export interface OcrTicketInfoResType {
  ticetSeat: string;
  ticketDate: string;
  ticketLocation: string;
}

export type TicketTemplateListType = TicketTemplateType[];

export interface TicketTemplateType {
  templateId: number;
  img: string;
}

export const example = [
  {
    img: 'https://pbs.twimg.com/media/DzHQEhRV4AAcYeW?format=jpg&name=4096x4096',
    title: '태민💎',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'https://nitter.allella.fr/pic/media%2FElVtR3MVgAIx8Jr.jpg%3Fname%3Dsmall',
    title: '뮤지컬ismylife💥',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20220330132407_3184805703c0ee3fd1ddd22b578854db.jpg',
    title: '페스티벌🍻',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'https://post-phinf.pstatic.net/MjAyMTA2MTdfODAg/MDAxNjIzOTE4NjY4Mjg4.F_DQfAgeb-VC8OnuHmon_BG8aLUKfDLwSD50d5FudcQg.GffqXqE-QRbQiwa2RvZOiaEwJQIr1GHQD_QJr9Wy55kg.JPEG/%EC%95%84%EB%A0%88%EB%82%98%EB%AA%AC%EC%8A%A4%ED%83%80%EC%97%91%EC%8A%A4-%EB%AF%BC%ED%98%81-%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C_2.jpg?type=w1200',
    title: '배구🏐',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'https://img.hankyung.com/photo/201902/BF.18956679.1.jpg',
    title: '영화🎥',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'http://file3.instiz.net/data/file3/2022/03/31/9/f/e/9fe20dba9362e23bba3d2475a2ce02a3.jpg',
    title: '원영',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'https://images.chosun.com/resizer/XbRfWtmHCcz9i7qyJpuV7vBzugQ=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/Q5AGLAHF4BG7VDI6VEXYK75SPU.jpg',
    title: '지킬',
    date: '22.03.04~22.09.09',
  },
  {
    img: 'https://image.fmkorea.com/files/attach/new2/20220329/3655109/2889212861/4478307323/6090b3178e5b2bbc3476308bc475a3fb.jpg',
    title: '레이',
    date: '22.03.04~22.09.09',
  },
];
