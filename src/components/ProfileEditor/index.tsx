import React, { useState, FC } from 'react';

import BasicButton from '@components/Common/BasicButton';

import { Container, ProfileInfoContainer, ButtonWrapper } from './style';

// Form에서 받는 Props -> onSubmit 함수 (인자로 form :{...} 을 받는다.)
// form의 nickname은 문자, bio는 문자
type MyFormProps = {
  onSubmit: (form: { nickname: string; bio: string }) => void;
};

const MyForm: FC<MyFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    nickname: '',
    bio: '',
  });

  // form에서 nickname, bio 비구조 할당
  const { nickname, bio } = form;

  // e: any로 지정하고 마우스를 올라면 해당 이벤트의 type을 볼 수 있다.
  // onChange 함수가 실행되면 form의 nickname, bio value 변경
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // e: any로 지정하고 마우스를 올라면 해당 이벤트의 type을 볼 수 있다.
  // handleSubmit이 발생하면 기존에 일어나던 이벤트를 없애고
  // form을 인자로 넣어 onSubmit 함수를 실행시킨다
  // form 초기화한다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      nickname: '',
      bio: '',
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ProfileInfoContainer>
        <h1>나의 프로필</h1>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>아이디</h2>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>닉네임</h2>
        <textarea name="nickname" value={nickname} onChange={onChange} />
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <h2>바이오</h2>
        <textarea name="bio" value={bio} onChange={onChange} />
      </ProfileInfoContainer>
      <ButtonWrapper>
        <BasicButton type="submit" text="프로필 저장하기" handler={() => {}} />
      </ButtonWrapper>
    </Container>
  );
};

export default MyForm;
