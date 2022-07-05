import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 1.2rem;
  :hover {
    opacity: 0.7;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const ProfileButton = styled.button`
  :hover {
    opacity: 0.8;
  }
`;
