import React from 'react';

import { ReactComponent as LikeSvg } from '@images/like.svg';
import { ReactComponent as LikeFillSvg } from '@images/like-fill.svg';
import { ColorCode } from '@utils/constants';

interface Props {
  size: number;
  fill: boolean;
}

const Like: React.FC<Props> = ({ size, fill }) => {
  return fill ? (
    <LikeFillSvg width={`${size}rem`} height={`${size}rem`} fill={ColorCode.PURPLE2} />
  ) : (
    <LikeSvg width={`${size}rem`} height={`${size}rem`} fill={ColorCode.PURPLE2} />
  );
};

export default Like;
