import React from 'react';

import defaultImage from '@images/default-image.png';
import { Image } from './style';

interface Props {
  size: number;
  profileImg: string | undefined;
}

const ProfileIcon: React.FC<Props> = ({ size, profileImg }) => {
  const handleImgError = (e: any) => {
    e.target.onerror = null;
    e.target.src = defaultImage;
  };

  return <Image src={profileImg} alt="" size={size} onError={handleImgError} />;
};

export default ProfileIcon;
