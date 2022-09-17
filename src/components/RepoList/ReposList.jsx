import React, { useState, useEffect, useCallback } from 'react';

import hooks from '../../hooks';
import { getUserRepos } from '../../cervices/Api';
import PaginatedItems from '../paginate';
import Repo from '../repo';
import './RepoList.css';

export default function ReposList({ username, reposLenght }) {
  const [repos, setRepos] = useState([]);
  const [userName, setUserName] = useState(username);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrenPage] = useState(1);

  // const handleClickOpen = useCallback((name) => {
  //     addRepos(name)
  // }, [])

  // useEffect(() => {
  //     setIsLoading(true);
  //     addRepos(userName);
  //     setIsLoading(false);
  // }, [userName]);

  const isComponentMounted = hooks.useComponentDidMount();

  async function addRepos(userName) {
    try {
      const repos = await getUserRepos(userName, currentPage);
      setRepos(repos);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  }
  useEffect(() => {
    if (isComponentMounted) {
      setIsLoading(true);
      addRepos(userName);
      setIsLoading(false);
    }
  }, [userName, isComponentMounted]);

  function definePage() {
    setCurrenPage(Math.ceil(reposLenght % 40));
  }

  // function repoList() {
  //     if (repos) {
  //         return (
  //             repos.map((repo) => {
  //                 return <Repo repo={repo} key={repo.name} />
  //             })
  //         )
  //     }

  // }
  return (
    <section className="repo-list">
      <h2 className="repo-list__quantity">Repositories ({reposLenght})</h2>
      {/* {repoList()} */}
      <PaginatedItems repos={repos} itemsPerPage={4} />
    </section>
  );
}
