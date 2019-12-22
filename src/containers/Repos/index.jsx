/**
 * External Dependencies
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

/**
 * Internal Dependencies
 */
import { CardWrapper } from '../../shared/components/RepoCard/styles';
import { getRepos, loadMore } from '../../store/ducks/repos';
import RepoCard from '../../shared/components/RepoCard';
import PageTitle from '../../shared/components/PageTitle';
import Alert from '../../shared/components/Alert';

const Repos = () => {
  /*
   * Redux store
  */
  const { repos } = useSelector((state) => state);
  const dispatcher = useDispatch();

  const [page, setPage] = useState(1);

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

  const dispatchAndLoadMore = ({ page }) => {
    dispatcher(
      loadMore({
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

  useEffect(() => {
    const go = async (p) => {
      return await dispatchAndLoadMore({ page: p });
    };

    go(page);
  }, [page]);

  window.onscroll = debounce(() => {
    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;

    if (innerHeight + scrollTop === offsetHeight) {
      setPage(page + 1);
    }
  }, 1);

  const mountRepoCards = (reposList) => {
    const { data, error } = reposList;

    if (error) {
      return <Alert type="error" message="There was an error trying to get the repositories. Try again later." />;
    }

    if (data) {
      return data.map((repoItem) => {
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
            link={`/pulls/${username}/${name}`}
            isLoading={repos.isLoading}
          />
        );
      });
    }
  };

  return (
    <>
      <PageTitle text="Github Javascript Popular Repos" />

      <CardWrapper>
        {mountRepoCards(repos)}
        {repos.isLoading ? (
          <>
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
            <RepoCard isLoading={repos.isLoading} />
          </>
        ) : ''}
      </CardWrapper>
    </>
  );
};

export default Repos;
