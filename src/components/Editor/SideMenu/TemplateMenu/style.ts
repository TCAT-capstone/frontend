import { ColorCode } from '@src/utils/constants';
import styled from 'styled-components';

interface TemplateImageProps {
  focus: boolean;
}

export const Container = styled.div`
  height: 27rem;
  margin-top: 2rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TemplateImage = styled.img<TemplateImageProps>`
  width: 100%;
  height: 10.4rem;
  border: solid 2px ${(props) => (props.focus ? ColorCode.PRIMARY : 'transparent')};
  border-radius: 0.625rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  object-fit: cover;
  cursor: pointer;
`;

export const AddTemplateButton = styled.button`
  width: 100%;
  height: 10.4rem;
  border-radius: 0.625rem;
  background-color: rgba(94, 81, 233, 0.1);
`;
