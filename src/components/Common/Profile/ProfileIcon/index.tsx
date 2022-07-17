import React from 'react';

import { Image } from './style';

interface Props {
  size: number;
  profileImg: string;
}

const ProfileIcon: React.FC<Props> = ({ size, profileImg }) => {
  return <Image src={profileImg} alt="프로필 사진" size={size} />;
};

export default ProfileIcon;
