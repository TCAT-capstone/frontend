import fetchApi from '@utils/fetch';

import { ProfileType } from '@src/types/member';

export const getMyProfile = async (): Promise<ProfileType | false> => {
  try {
    const res = await fetchApi.get(`/api/members/my-profile`);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const getMemberProfile = async (memberId: number): Promise<ProfileType | false> => {
  try {
    const res = await fetchApi.get(`/api/members/${memberId}/profile`);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};
