import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const ModalPortal: React.FC<Props> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root')!;
  return createPortal(children, modalRoot);
};

export default ModalPortal;
