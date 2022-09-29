import React from 'react';
import { toast } from 'react-toastify';
import shareImg from '@images/share.svg';
import { Button } from './style';

const ShareButton: React.FC = () => {
  const url = encodeURI(window.location.href);

  const shareTwitter = () => {
    const text = 'TCAT에서 확인하세요!';
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
  };

  const copyUrl = (e: any) => {
    navigator.clipboard.writeText(url);
    toast.success('클립보드에 주소가 복사되었습니다!');
  };

  return (
    <Button onClick={copyUrl}>
      <img src={shareImg} alt="공유 아이콘" />
    </Button>
  );
};

export default ShareButton;
