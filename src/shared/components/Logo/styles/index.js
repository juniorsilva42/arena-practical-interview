import styled from 'styled-components';

import logoSrc from '../../../../../public/assets/images/logo-arena.svg';

import { device } from '../../../theme/settings/screens';

export const LogoContainer = styled.div`
  width: 100vh;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 350px;
  & p {
    margin: 4px;
    font-weight: 400;
    color: #cdcdcd;
    font-size: 1.2rem;
  }
  @media ${device.tablet} {
    p {
      margin-top: 8px;
      font-size: 0.99rem;
    }
  }
  @media ${device.mobile} {
    float: left;
    margin: 0 10px;
    p { 
      font-size: 0.96rem; 
      margin-top: 7px;
    }
  }
`;

export const Figure = styled.figure`
  height: 30px;
  margin: 0;
`;

export const LogoAvatar = styled.img.attrs({
  src: logoSrc,
})`
  height: inherit;
`;
