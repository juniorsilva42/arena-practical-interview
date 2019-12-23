import styled from 'styled-components';

import { device } from '../../../../theme/settings/screens';

export const PullRequestsContainer = styled.div`
  width: calc(200vh - 20%);
  border: 1px solid #ecf0f1;
  margin: 0 auto;
  transition: 0.8s; 

  @media screen
  and (min-width: 768px) 
  and (max-width: 1024px) {
    width: 80vh;
  }
  
  @media screen
  and (min-width: 375px) 
  and (max-width: 812px) {
    width: 55vh;
  }

  @media screen
  and (min-width: 375px) 
  and (max-width: 812px) {
    width: 55vh;
  }

  @media ${device.mobile} {
    width: 55vh;
  }  
`;

export const PullRequestHeader = styled.div`
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 4px;
  padding: 15px;
  border-radius: 0.8rem;

  & .pull-status-info {
    float: right;
    font-size: 0.9rem;
    font-weight: 300;
    margin: 4px 0;

    @media ${device.mobile} {
      font-size: 0.6rem;
      margin-top: 4px;
    }
  }
`;
