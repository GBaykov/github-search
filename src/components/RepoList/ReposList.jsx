import React, { useState, useEffect, useCallback, useContext } from 'react';
import hooks from '../../hooks';
import { getUserRepos } from '../../cervices/Api';
import PaginatedItems from '../paginate';
import Repo from '../repo';
import './RepoList.css';
import { ACTIONS, AppContext } from '../../reducer';

export default function ReposList() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <section className="repo-list">
      <h2 className="repo-list__quantity">Repositories ({state.reposLenght})</h2>
      <PaginatedItems itemsPerPage={4} />
    </section>
  );
}
