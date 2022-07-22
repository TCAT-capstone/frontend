import fetchApi from '@utils/fetch';

import { ProfileType } from '@src/types/member';

export const getMemberProfile = async (memberId: number): Promise<ProfileType | false> => {
  try {
    const res = await fetchApi.get(`/api/members/${memberId}/profile`);
    if (res.status !== 200) throw new Error('error');
    const data = await res.json();
    return data;
  } catch (err) {
    return false;
  }
};
