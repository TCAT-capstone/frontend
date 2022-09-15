import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 35rem;
  height: 3.5rem;
  margin: auto;
  margin-top: 1rem;
  box-sizing: border-box;
  padding: 0.9rem 1.3rem;
  border-radius: 1.1rem;
  background-color: rgba(248, 249, 255);
`;

export const SearchContent = styled.input`
  ::-webkit-input-placeholder {
    color: black;
  }
  width: 30.5rem;
  background-color: rgba(248, 249, 255);
  margin-left: 0.5rem;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  :hover {
    opacity: 0.7;
  }
`;

export const ResetButton = styled.button`
  margin-right: 1.4rem;
`;

export const OptionContainer = styled.div`
  position: relative;
  right: 0;
  width: 8rem;
  background-color: rgba(248, 249, 255);
  border: none;
  border-left: 0.1rem solid rgba(183, 184, 189);
  line-height: 1.5rem;
`;

export const OptionButton = styled.button`
  width: 8rem;
  :hover {
    opacity: 0.8;
  }
  img {
    margin-left: 3rem;
  }
`;
