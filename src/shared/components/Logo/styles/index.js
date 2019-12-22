import styled from 'styled-components';

import logoSrc from '../../../../../public/assets/images/logo-arena.svg';

import { device } from '../../../theme/settings/screens';

export const LogoContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 465px;

  & p {
    margin: 2px 8px;
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
      font-size: 0.8rem; 
      margin-top: 5px;
    }
  }
`;

export const Figure = styled.figure`
  height: 23px;
  margin: 0;
`;

export const LogoAvatar = styled.img.attrs({
  src: logoSrc,
})`
  height: inherit;
`;
