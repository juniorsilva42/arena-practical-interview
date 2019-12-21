import styled from 'styled-components';

import { device } from '../../../theme/settings/screens';

export const Container = styled.section`
  width: 80%;
  margin: 20px auto 8% auto;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  word-break: break-word;
  padding: 0;
  
  @media ${device.mobile} {
    width: 100%;
  }
`;