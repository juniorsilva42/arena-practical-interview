import styled from 'styled-components';

export const PullRequestsContainer = styled.div`
  width: calc(200vh - 20%);
  min-width: 100vh;
  border: 1px solid #ecf0f1;
  margin: 0 auto;
  transition: 0.8s;
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
  }
`;