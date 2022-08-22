import styled from 'styled-components';
import { ColorCode } from '@utils/constants';
import { media } from '@styles/media';

interface ArrowImgProps {
  onDropdown: boolean;
}

export const PostContainer = styled.div`
  margin: 0 auto;
  width: 49rem;
  @media (max-width: 49rem) {
    width: 95%;
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

export const BottomBar = styled.div`
  position: fixed;
  width: 100rem;
  ${media.large`
    width: 65.2rem;
  `}
  ${media.medium`
    width: 100%;
  `}
  bottom: 0;
  display: flex;
  justify-content: right;
  z-index: 5;
`;

export const TicketbookContainer = styled.div`
  position: absolute;
  top: -7.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 19rem;
  background-color: ${ColorCode.LIGHT_PURPLE};
  border-radius: 1rem 1rem 0 0;
  padding: 1.8rem 1rem 4rem 1rem;
  box-sizing: border-box;
  font-size: 0.875rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const SelectedTicketbook = styled.div`
  width: 14rem;
  height: 2rem;
  display: flex;
  align-items: center;
  background-color: ${ColorCode.WHITE};
  border-radius: 0.5rem;
  padding-left: 0.8rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const ArrowImg = styled.img<ArrowImgProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  transform: ${(props) => (props.onDropdown ? '' : 'scaleY(-1)')};
`;

export const SelectTicketbookContainer = styled.div`
  position: absolute;
  bottom: 2.3rem;
  background-color: ${ColorCode.WHITE};
  border-radius: 0.5rem;
  div {
    display: flex;
    align-items: center;
    width: 14rem;
    height: 2rem;
    padding-left: 0.8rem;
    box-sizing: border-box;
    cursor: pointer;
    :hover {
      background-color: ${ColorCode.GRAY2};
      border-radius: 0.5rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 2rem;
`;
