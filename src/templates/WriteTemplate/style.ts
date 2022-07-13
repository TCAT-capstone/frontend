import styled from 'styled-components';

export const PostContainer = styled.div`
  margin: 0 auto;
  width: 49rem;
  @media (max-width: 49rem) {
    width: 100%;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  z-index: 5;
`;
