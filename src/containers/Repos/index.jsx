/**
 * External Dependencies
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

/**
 * Internal Dependencies
 */
import { getRepos, loadMore } from '../../store/ducks/repos';
import { CardWrapper } from '../../shared/components/RepoCard/styles';
import RepoCard from '../../shared/components/RepoCard';
import PageTitle from '../../shared/components/PageTitle';
import Alert from '../../shared/components/Alert';
import { formatDate } from '../../shared/utils/helpers';

/**
 * Repos Container
 *
 * @description connect with global redux store and render the Repos page
 *
 * @return {*} component.
 */
const Repos = () => {
  /*
   * Redux store
  */
  const { repos } = useSelector((state) => state);
  const dispatcher = useDispatch();

  /*
   * Local store
  */
  const [page, setPage] = useState(2);

  /**
   * Dispatch action to get all repos
   *
   * @param {number} page number of pagination
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

  /**
   * Dispatch action to more repos
   *
   * @param {number} page number of pagination
  */
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

  /**
   * Get all repos on component mount lifecycle
  */
  useEffect(() => {
    dispatchAndGetRepos({ page: 1 });
  }, []);

  /**
   * Fetch more repos at listening of changes on page param local state
  */
  useEffect(() => {
    dispatchAndLoadMore({ page });
  }, [page]);

  /**
   * Listen scroll event for set page to +1 when the scroll bar is at the end
  */
  window.onscroll = debounce(() => {
    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;

    if (innerHeight + scrollTop === offsetHeight) {
      setPage(page + 1);
    }
  }, 1);

  /*
   * Prepare and show each repo result
  */
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
          </>
        ) : ''}
      </CardWrapper>
    </>
  );
};

export default Repos;
