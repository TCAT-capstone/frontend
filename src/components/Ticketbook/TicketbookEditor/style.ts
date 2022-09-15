import { ColorCode } from '@src/utils/constants';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
`;

export const InputContainer = styled.div`
  margin-top: 2rem;
  b {
    display: block;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
`;

export const TextInput = styled.input`
  width: 15rem;
  height: 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 2rem;
  transition: 0.3s;
  box-sizing: border-box;
  border: 2px solid ${ColorCode.GRAY1};
  color: ${ColorCode.GRAY3};
  :focus {
    border-color: ${ColorCode.PRIMARY};
    color: ${ColorCode.BLACK};
  }
`;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding-left: 0.8rem;
  transition: 0.3s;
  box-sizing: border-box;
  border: 2px solid ${ColorCode.GRAY1};
  color: ${ColorCode.GRAY3};
  overflow: hidden;
  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 65%;
    line-height: 1.5rem;
  }
  button {
    width: 35%;
    height: 100%;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${ColorCode.GRAY3};
    padding: 0 0.7rem;
    border-left: 1px solid ${ColorCode.GRAY1};
    :hover {
      background-color: ${ColorCode.LIGHT_PURPLE};
    }
  }
`;
