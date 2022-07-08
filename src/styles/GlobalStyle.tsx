import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ColorCode } from '@utils/constants';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: ${ColorCode.BLACK};
    font-family: 'Pretendard';
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: 'Pretendard';
  }
  a {
    text-decoration: none;
    color: ${ColorCode.BLACK};
    &:visited {
      color: ${ColorCode.BLACK};
    }
  }
  #root {
    position: relative;
  }
`;

export default GlobalStyle;
