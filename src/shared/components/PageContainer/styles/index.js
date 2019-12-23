import styled from 'styled-components';

import { device } from '../../../../../theme/settings/screens';

export const Container = styled.section`
  width: 90%;
  margin: 20px auto 7% auto;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  word-break: break-word;
  
  @media ${device.mobile} {
    width: 100%;
  }

  @media screen
  and (min-width: 420px) 
  and (max-width: 580px) {
    width: 100%;
  }  
`;