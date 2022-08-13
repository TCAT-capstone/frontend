import fetchApi from '@utils/fetch';

import { HomeIdType, ProfileType, SignUpType, UpdateMyProfileType } from '@src/types/member';

export const getMyProfile = async (): Promise<ProfileType | false> => {
  try {
    const res = await fetchApi.get(`/api/members/my-profile`);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const updateMyProfile = async (
  updateMyProfileReq: UpdateMyProfileType,
): Promise<UpdateMyProfileType | false> => {
  try {
    const res = await fetchApi.patch('/api/members/my-profile', updateMyProfileReq);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const getMemberProfile = async (homeId: string): Promise<ProfileType | false> => {
  try {
    const res = await fetchApi.get(`/api/members/${homeId}/profile`);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const signup = async (signupReq: SignUpType): Promise<SignUpType | false> => {
  try {
    const res = await fetchApi.patch('/api/members/signup', signupReq);
    if (res.status !== 200) throw new Error('error');
    return await res.json();
  } catch (err) {
    return false;
  }
};

export const checkDuplicateHomeId = async (homeIdReq: HomeIdType): Promise<boolean> => {
  try {
    const res = await fetchApi.post('/api/members/homeId/duplicate', homeIdReq);
    if (res.status !== 200) throw new Error('중복된 아이디입니다.');
    return true;
  } catch (err) {
    return false;
  }
};
