import styled from 'styled-components';

import { device } from '../../../theme/settings/screens';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CardItem = styled.div`
  background: #FFF;
  width: calc(80vh - 21%);
  min-width: 250px;
  min-height: calc(65vh - 280px); 
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 4px;
  border: 1px solid #ecf0f1;
  border-radius: 7px;
  margin: 0px 7px 7px 0;
  transition: 0.8s;
  
  @media ${device.tablet}, ${device.mobile} {
    .list-title {
      font-size: 1.5rem;
    }
  }

  @media ${device.mobile} {
    width: 100%;
    min-height: calc(80vh - 280px); 
    margin: 0px 0 10px 0;
    &:last-child {
      margin-bottom: 26%;
    }
  }

  & .list-title {
    margin: 0;
    font-weight: 800;
    font-style: bold;
    font-size: 1.4rem;
  }
  
  & .description   {
    margin: 5px 0;
    font-size: 0.98rem;
    font-weight: 500;
    font-style: normal;
    color: #B8B8B8;
  }

  & .list-createdat {
    margin: 4px 0;
    font-size: 0.8rem;
    font-weight: 500;
    font-style: normal;
    color: #B8B8B8;
  }

  .displayed-status {
    font-size: 0.7rem;
    color: #B8B8B8;
  }

  .stats { 
    margin-top: 40px; 
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    
    > .stats-number {
      font-size: 2.8rem;
      font-weight: 900;
      font-style: bold;
    } 
    &:hover { 
      cursor: pointer;
      color: #4DC27A; 
    }
  }
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #D0D0D0;
`;

export const CardBody = styled.div`
  margin: 20px;
`;
