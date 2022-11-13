export const getDateString = (date: Date): String => {
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
};

export const getDateStringDash = (date: Date): String => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;
};

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

export const getDateTimeString = (date: Date): String => {
  return `${date.getFullYear()}년 ${(date.getMonth() + 1).toString()}월 ${date.getDate().toString()}일(${
    dayList[date.getDay()]
  }) ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
};
