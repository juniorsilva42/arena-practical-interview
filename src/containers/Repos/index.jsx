/**
 * External Dependencies
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

/**
 * Internal Dependencies
 */
import { CardWrapper } from '../../shared/components/RepoCard/styles';
import { getRepos } from '../../store/ducks/repos';
import RepoCard from '../../shared/components/RepoCard';
import PageTitle from '../../shared/components/PageTitle';

const Repos = () => {
  /*
   * Redux store
  */
  const { repos, pullRequests } = useSelector((state) => state);
  const dispatcher = useDispatch();

  /*
   * Dispatch action to get all repos
  */
  const dispatchAndGetRepos = ({ page }) => {
    dispatcher(
      getRepos({
        data: {
          query: 'language:Javascript',
          sortBy: 'stars',
          page,
        },
      }),
    );
  };

  useEffect(() => {
    dispatchAndGetRepos({ page: 1 });
  }, []);

  const mountRepoCards = (reposList) => {
    const { data } = reposList;

    const { items } = data;

    if (items) {
      return items.map((repoItem) => {
        const {
          id,
          name,
          full_name: fullname,
          forks_count,
          stargazers_count,
          owner,
          description,
        } = repoItem;

        const { avatar_url, login: username, type } = owner;

        return (
          <RepoCard
            key={id}
            title={name}
            description={description}
            starsNumber={stargazers_count}
            forksNumber={forks_count}
            user={{ username, type, avatar_url }}
          />
        );
      });
    }
  };

  return (
    <>
      <PageTitle text="Github Javascript Popular Repos" />

      {repos.isLoading && 'Loading...'}

      <CardWrapper>
        {mountRepoCards(repos)}
      </CardWrapper>
    </>
  );
};

export default Repos;
