import React from 'react';

import userImg from '@images/sample-user-img.jpg';

import { Image } from './style';

interface Props {
  size: number;
}

const ProfileIcon: React.FC<Props> = ({ size }) => {
  return <Image src={userImg} alt="프로필 사진" size={size} />;
};

export default ProfileIcon;
