import styled from 'styled-components';
import { ColorCode } from '@utils/constants';

interface ContainerProps {
  dragActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 49rem;
  height: 20rem;
  margin: 0 auto;
  background-color: ${(props) => (props.dragActive ? 'rgba(242, 245, 255, 0.4)' : 'rgba(242, 245, 255, 0.8)')};
  border: 1px dashed rgba(82, 22, 209, 0.8);
  border-radius: 1.75rem;
  cursor: pointer;
  p {
    color: ${ColorCode.PURPLE2};
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    padding-top: 1.8rem;
  }
`;

export const FileUploadButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TicketBox = styled.div`
  position: relative;
  width: 4.8rem;
  height: 2.3rem;
  background: rgba(82, 22, 209, 0.3);
  border-radius: 0.25rem;
`;

export const TicketLine = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 0.36rem;
  height: 70%;
  border-left: 1px dashed rgba(82, 22, 209, 0.8);
`;

export const DragFileDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
