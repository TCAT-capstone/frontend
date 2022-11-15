import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import RegisterTemplate from '@templates/RegisterTemplate';
import { checkDuplicateHomeId, signup } from '@apis/member';
import { getTicketbooks } from '@apis/ticketbook';
import { userProfileState, userTicketbooksState } from '@stores/user';

type ErrorType = { state: 'error' | 'valid'; message: string };

const RegisterPage: React.FC = () => {
  const setUserProfile = useSetRecoilState(userProfileState);
  const setUserTicketbooks = useSetRecoilState(userTicketbooksState);
  const [name, setName] = useState('');
  const [homeId, setHomeId] = useState('');
  const [nameError, setNameError] = useState<ErrorType>({ state: 'error', message: '' });
  const [homeIdError, setHomeIdError] = useState<ErrorType>({ state: 'error', message: '' });

  const handleSignUp = async () => {
    if (validateName(name) && validateHomeId(homeId) && !(await isDuplicated(homeId))) {
      const newUserProfile = await signup({ name, homeId });
      if (newUserProfile) {
        setUserProfile((prev) => {
          return { ...prev, name: newUserProfile.name, homeId: newUserProfile.homeId };
        });
        const ticketbookList = await getTicketbooks(newUserProfile.homeId);
        if (ticketbookList) {
          setUserTicketbooks(ticketbookList);
        }
      }
    }
  };

  const isDuplicated = async (homeId: string) => {
    const result = await checkDuplicateHomeId({ homeId });
    if (!result) {
      setHomeIdError({ state: 'error', message: '이미 사용중인 아이디에요.' });
      return true;
    }
    return false;
  };

  const checkEng = (str: string) => {
    const regExp = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
    if (regExp.test(str)) {
      return true;
    }
    return false;
  };

  function checkSpace(str: string) {
    if (str.search(/\s/) !== -1) {
      return true;
    }
    return false;
  }

  const validateName = (newName: string) => {
    if (newName.length > 12 || newName.length < 1) {
      setNameError({ state: 'error', message: '닉네임은 1자 이상, 12자 이내 이어야 해요.' });
      return false;
    }
    setNameError({ state: 'valid', message: '' });
    return true;
  };

  const validateHomeId = (newHomeId: string) => {
    if (newHomeId.length > 12 || newHomeId.length < 6) {
      setHomeIdError({ state: 'error', message: '아이디는 6자 이상, 12자 이내 이어야 해요.' });
      return false;
    }
    if (!checkEng(newHomeId) || checkSpace(newHomeId)) {
      setHomeIdError({ state: 'error', message: '아이디는 영문 + 숫자 조합만 가능해요.' });
      return false;
    }
    setHomeIdError({ state: 'valid', message: '' });
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    validateName(e.target.value);
  };

  const handleHomeIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHomeId(e.target.value);
    validateHomeId(e.target.value);
  };

  return (
    <RegisterTemplate
      nameError={nameError}
      homeIdError={homeIdError}
      handleNameChange={handleNameChange}
      handleHomeIdChange={handleHomeIdChange}
      handleSignUp={handleSignUp}
    />
  );
};

export default RegisterPage;
