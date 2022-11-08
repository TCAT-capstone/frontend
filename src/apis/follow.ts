import fetchApi from '@utils/fetch';

import { SimpleProfileListType, UpdateFollowingType } from '@src/types/member';

export const getFollowingProfile = async (homeId: string | undefined): Promise<SimpleProfileListType | false> => {
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

export const updateFollowing = async (
  homeId: string,
  updateFollowingReqType: UpdateFollowingType,
): Promise<UpdateFollowingType | false> => {
  try {
    const res = await fetchApi.put(`/api/member/${homeId}/following`, updateFollowingReqType);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const deleteFollowing = async (homeId: string, targetHomeId: string | undefined): Promise<boolean> => {
  try {
    const res = await fetchApi.delete(`/api/member/${homeId}/following/${targetHomeId}`);
    if (res.status !== 200) throw new Error('error');
    return true;
  } catch (err) {
    return false;
  }
};
