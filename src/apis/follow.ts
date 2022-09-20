import fetchApi from '@utils/fetch';

import { SimpleProfileListType } from '@src/types/member';

export const getFollowingProfile = async (homeId: string): Promise<SimpleProfileListType | false> => {
  try {
    const res = await fetchApi.get(`/api/member/${homeId}/following`);
    if (res.status !== 200) throw new Error('error');
    const { follows } = await res.json();
    return follows;
  } catch (err) {
    return false;
  }
};

export const getFollowerProfile = async (homeId: string): Promise<SimpleProfileListType | false> => {
  try {
    const res = await fetchApi.get(`/api/member/${homeId}/follower`);
    if (res.status !== 200) throw new Error('error');
    const { follows } = await res.json();
    return follows;
  } catch (err) {
    return false;
  }
};
