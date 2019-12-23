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

export const PullRequestItem = styled.div`
  border: 1.5px solid #F0F0F0;
  background-color: #FFF;
  margin: 5px 0;
  padding: 7px 15px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;

export const PullRequestItemTitle = styled.span`
  font-size: .9rem;
  font-weight: bold;

  & .icon {
    margin-right: 8px;
    margin-top: 2px;
  }
`;

export const PullRequestItemMetadata = styled.span`
  margin: 7px 0 0 18px;
  font-size: .8rem;
  color: #586069;
  max-width: 100vh;
  display: block;
  text-align: justify;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 7.1em;
  line-height: 1.2em;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const PullRequestUser = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 18px;
  font-size: 0.8rem;

  & .user-photo {
    width: 20px;
    height: 20px;

    & img {
      border-radius: 50%;
      max-width: 100%;
      max-height: 100%;
    }
  }

  & p {
    margin: 3px 5px;
    color: #666;
  }
`;
