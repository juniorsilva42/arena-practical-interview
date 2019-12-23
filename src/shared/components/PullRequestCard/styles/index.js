import styled from 'styled-components';

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
  display: flex;
  flex-direction: row;
  font-size: .9rem;
  font-weight: 800;
  margin-top: 5px;

  & .icon {
    margin-right: 8px;
  }

  & span {
    margin: 0;
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

  & .metadata-text-info {
    margin: 1px 5px;
    color: #666;
  }

  & .username {
    font-size: 1rem;
    margin: 0;
  }

  & .date {
    position: relative;
    top: -1px;
    left: 1px;
    font-size: .75rem;
  }  
`;
