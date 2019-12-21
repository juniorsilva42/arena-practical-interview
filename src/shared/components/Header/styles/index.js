import styled from 'styled-components';

import { device } from '../../../theme/settings/screens';

export const HeaderBox = styled.header`
  width: 100%;
  padding: 33px 0;
  height: 95px;
  background-color: #FFF;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 4px;
  z-index: 100;
  
  @media ${device.mobile} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;