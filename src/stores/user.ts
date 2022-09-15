import { atom, selector } from 'recoil';

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

export const exampleTicketbooks = [
  {
    id: 1,
    ticketbookImg: 'https://pbs.twimg.com/media/DzHQEhRV4AAcYeW?format=jpg&name=4096x4096',
    name: '태민💎',
    description: '22.03.04~22.09.09',
  },
  {
    id: 2,
    ticketbookImg: 'https://nitter.allella.fr/pic/media%2FElVtR3MVgAIx8Jr.jpg%3Fname%3Dsmall',
    name: '뮤지컬ismylife💥',
    description: '22.03.04~22.09.09',
  },
  {
    id: 3,
    ticketbookImg:
      'https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20220330132407_3184805703c0ee3fd1ddd22b578854db.jpg',
    name: '페스티벌🍻',
    description: '22.03.04~22.09.09',
  },
  {
    id: 4,
    ticketbookImg:
      'https://post-phinf.pstatic.net/MjAyMTA2MTdfODAg/MDAxNjIzOTE4NjY4Mjg4.F_DQfAgeb-VC8OnuHmon_BG8aLUKfDLwSD50d5FudcQg.GffqXqE-QRbQiwa2RvZOiaEwJQIr1GHQD_QJr9Wy55kg.JPEG/%EC%95%84%EB%A0%88%EB%82%98%EB%AA%AC%EC%8A%A4%ED%83%80%EC%97%91%EC%8A%A4-%EB%AF%BC%ED%98%81-%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C_2.jpg?type=w1200',
    name: '배구🏐',
    description: '22.03.04~22.09.09',
  },
  {
    id: 5,
    ticketbookImg: 'https://img.hankyung.com/photo/201902/BF.18956679.1.jpg',
    name: '영화🎥',
    description: '22.03.04~22.09.09',
  },
  {
    id: 6,
    ticketbookImg: 'http://file3.instiz.net/data/file3/2022/03/31/9/f/e/9fe20dba9362e23bba3d2475a2ce02a3.jpg',
    name: '원영',
    description: '22.03.04~22.09.09',
  },
  {
    id: 7,
    ticketbookImg:
      'https://images.chosun.com/resizer/XbRfWtmHCcz9i7qyJpuV7vBzugQ=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/Q5AGLAHF4BG7VDI6VEXYK75SPU.jpg',
    name: '지킬',
    description: '22.03.04~22.09.09',
  },
  {
    id: 8,
    ticketbookImg:
      'https://image.fmkorea.com/files/attach/new2/20220329/3655109/2889212861/4478307323/6090b3178e5b2bbc3476308bc475a3fb.jpg',
    name: '레이',
    description: '22.03.04~22.09.09',
  },
];
