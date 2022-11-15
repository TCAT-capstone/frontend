import React from 'react';
import { useRecoilValue } from 'recoil';
import { userProfileState } from '@stores/user';

import logoImg from '@images/logo.png';
import checkImg from '@images/check-rounded.svg';
import errorImg from '@images/error-rounded.svg';
import lockImg from '@images/lock.svg';
import { Container, ButtonWrapper, InputContainer, Input, ErrorText, InputIcon, Button } from './style';

interface Props {
  nameError: { state: 'error' | 'valid'; message: string };
  homeIdError: { state: 'error' | 'valid'; message: string };
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHomeIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp: () => void;
}

const RegisterTemplate: React.FC<Props> = ({
  nameError,
  homeIdError,
  handleNameChange,
  handleHomeIdChange,
  handleSignUp,
}) => {
  const myProfile = useRecoilValue(userProfileState);
  return (
    <Container>
      <img src={logoImg} alt="로고" width={58} />
      <h2>가입을 환영합니다!</h2>
      <p>두 가지만 입력하면 돼요.</p>
      <b>사용하실 닉네임을 알려주세요.</b>
      <InputContainer>
        <Input type="text" onChange={handleNameChange} state={nameError.state} placeholder="닉네임을 입력하세요." />
        <ErrorText>{nameError.message}</ErrorText>
        <InputIcon src={nameError.state === 'valid' ? checkImg : errorImg} alt="검증 아이콘" />
      </InputContainer>
      <b>사용하실 아이디를 알려주세요.</b>
      <InputContainer>
        <Input type="text" onChange={handleHomeIdChange} state={homeIdError.state} placeholder="아이디를 입력하세요." />
        <ErrorText>{homeIdError.message}</ErrorText>
        <InputIcon src={homeIdError.state === 'valid' ? checkImg : errorImg} alt="검증 아이콘" />
      </InputContainer>
      <b>이메일 주소를 확인해 주세요.</b>
      <InputContainer>
        <Input type="text" state="none" value={myProfile.email} disabled />
        <InputIcon src={lockImg} alt="자물쇠 모양 아이콘" />
      </InputContainer>
      <ButtonWrapper>
        <Button type="button" onClick={handleSignUp}>
          <span>완료하기</span>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default RegisterTemplate;
