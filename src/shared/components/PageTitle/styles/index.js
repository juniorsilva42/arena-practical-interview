import styled from 'styled-components';

import { device } from '../../../theme/settings/screens';

export const Heading = styled.div`
  width: 100%;

  @media ${device.mobile} {
    margin: 0 auto;
    
    text-align: center;
    font-size: 1rem;
  }
`;