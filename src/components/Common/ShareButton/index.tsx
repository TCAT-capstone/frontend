import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import shareImg from '@images/share.svg';
import twitterImg from '@images/twitter.svg';
import linkImg from '@images/link.svg';
import { Container, ShareContainer } from './style';

const ShareButton: React.FC = () => {
  const url = encodeURI(window.location.href);
  const [onOverlay, setOnOverlay] = useState(false);
  const OverlayRef = useRef<HTMLDivElement>(null);

  const shareTwitter = () => {
    const text = 'TCAT에서 확인하세요!';
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
    setOnOverlay(false);
  };

  const copyUrl = (e: any) => {
    navigator.clipboard.writeText(url);
    toast.success('클립보드에 주소가 복사되었습니다!');
    setOnOverlay(false);
  };

  const handleClickOutside = ({ target }: { target: any }) => {
    if (onOverlay && OverlayRef.current && !OverlayRef.current.contains(target)) {
      setOnOverlay(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <Container ref={OverlayRef}>
      <button type="button" onClick={() => setOnOverlay((prev) => !prev)}>
        <img src={shareImg} alt="공유 아이콘" />
      </button>
      {onOverlay && (
        <ShareContainer>
          <button type="button" onClick={() => shareTwitter()}>
            <img src={twitterImg} alt="트위터로 공유하기" />
          </button>
          <button type="button" onClick={copyUrl}>
            <img src={linkImg} alt="주소 복사하기" />
          </button>
        </ShareContainer>
      )}
    </Container>
  );
};

export default ShareButton;
