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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 4px;
  border: 1px solid #ecf0f1;
  border-radius: 7px;
  margin: 0px 7px 7px 0;
  transition: 0.8s;
  cursor: pointer;
  position: relative;

  &:hover { opacity: 0.7; }
  
  @media ${device.tablet}, ${device.mobile} {
    .list-title {
      font-size: 1.5rem;
    }
  }

  @media ${device.mobile} {
    width: 100%;
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
  
  & .description {
    margin: 5px 0;
    font-size: 0.98rem;
    font-weight: 500;
    font-style: normal;
    color: #B8B8B8;
    max-height: 100px;
  }
`;

export const Stats = styled.div`
  margin-top: 10px;
  font-size: 0.82rem;
`;

export const StatItem = styled.span`
  margin: 0 6px;

  &:first-child {
    margin: 0;
  }

  & .number-stat {
    margin-left: 3px;
  }

  cursor: default;
`;

export const User = styled.span`
  width: 100%; 
  border-top: 1px solid #ecf0f1;
  float: left;
  margin: 20px 0 10px 0;
  padding-top: 10px;
`;

export const UserPhoto = styled.span` 
  & img { 
    width: 30px; 
    height: 30px; 
  }

  float: left;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;

  & p {
    margin: 0 10px;
  }

  & p:first-child {
    margin-top: 2px;
  }

  & > .user-fullname { font-weight: 800; }
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #D0D0D0;
`;

export const CardBody = styled.div`
  margin: 20px;
`;
