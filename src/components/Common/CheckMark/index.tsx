import React from 'react';

import checkImg from '@images/check.svg';
import { CheckMarkImage } from './style';

const CheckMark: React.FC = () => {
  return <CheckMarkImage src={checkImg} alt="인증된 티켓" />;
};

export default CheckMark;
