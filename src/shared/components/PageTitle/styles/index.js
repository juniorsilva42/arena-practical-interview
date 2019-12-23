import styled from 'styled-components';

import { device } from '../../../../../theme/settings/screens';

export const Heading = styled.div`
  width: 100%;

  @media ${device.mobile} {
    margin: 0 auto;
    
    text-align: center;
    font-size: 0.9rem;
  }

  @media screen
  and (min-width: 420px) 
  and (max-width: 580px) {
    margin: 0 auto;
    text-align: center;
  } 
`;