import { useSetRecoilState } from 'recoil';
import { userProfileState, userTicketbooksState } from '@stores/user';
import { getMyProfile } from '@apis/member';
import { getTicketbooks } from '@apis/ticketbook';

const useGetUserInfo = (token: string | null) => {
  const setUserProfile = useSetRecoilState(userProfileState);
  const setUserTicketbooks = useSetRecoilState(userTicketbooksState);

  const getUserInfo = async () => {
    if (token) {
      const profile = await getMyProfile();
      if (profile) {
        setUserProfile(profile);
        const ticketbookList = await getTicketbooks(profile.homeId);
        if (ticketbookList) {
          setUserTicketbooks(ticketbookList);
        }
      }
    }
  };
  return { getUserInfo };
};

export default useGetUserInfo;
