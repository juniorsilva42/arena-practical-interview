import styled from 'styled-components';

import { device } from '../../../../../theme/settings/screens';

export const AlertContainer = styled.span`
  width: 80%;
  min-width: 10vh;
  background-color: ${(props) => {
    if (props.type === 'error') {
      return '#f8d7da';
    }
    if (props.type === 'alert') {
      return '#FCF2CD';
    }
  }};

  color: ${(props) => {
    if (props.type === 'error') {
      return '#721c24';
    }
  }};

  border: 1px solid;
  border-color: ${(props) => {
    if (props.type === 'error') {
      return '#f5c6cb';
    }
  }};

  padding: 12px 20px;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;

  @media ${device.mobile} {
    margin: 0 auto;
  }
`;