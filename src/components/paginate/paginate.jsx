import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { getUserRepos } from '../../cervices/Api';
import { ACTIONS, AppContext } from '../../reducer';
import Repo from '../repo';
import Spinner from '../spinner/spinner';
import './paginate.css';

function Items(repos) {
  return <>{repos.repos && repos.repos.map((repo) => <Repo repo={repo} key={repo.name} />)}</>;
}

export default function PaginatedItems({ itemsPerPage }) {
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [endOfSet, setEndOfSet] = useState(0);
  const [beginOfSet, setBeginOfSet] = useState(0);

  const { state, dispatch } = useContext(AppContext);

  async function addRepos(userName, currentPage) {
    try {
      setIsLoading(true);
      const repos = await getUserRepos(userName, currentPage);
      dispatch({ type: ACTIONS.setRepos, payload: { repos } });
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  }
  useEffect(() => {
    addRepos(state.userName, state.currentPage);
    setPageCount(Math.ceil(state.reposLenght / itemsPerPage));
  }, [state.userName, state.currentPage]);

  useEffect(() => {
    setBeginOfSet(state.currentPage * itemsPerPage - 3);
    const remnant = (state.currentPage * itemsPerPage) % state.reposLenght;
    const endOfS =
      remnant >= 4 ? state.currentPage * itemsPerPage : state.currentPage * itemsPerPage - remnant;
    setEndOfSet(endOfS);
  }, [state.userName, state.currentPage, state.user, state.repos]);

  const handlePageClick = (event) => {
    dispatch({ type: ACTIONS.setCurrentPage, payload: { currentPage: event.selected + 1 } });
  };
  const load = isLoading ? <Spinner /> : <Items repos={state.repos} />;

  function pageCountSet() {
    return (
      <p className="page-count">
        {beginOfSet}-{endOfSet} of {state.reposLenght} items
      </p>
    );
  }

  return (
    <>
      {load}
      <div className="paginate-count">
        {pageCountSet()}
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          className="pagination"
          activeClassName="active-page"
          activeLinkClassName="active-link"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous-item"
          previousLinkClassName="page-link"
          nextClassName="page-item next-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
        />
      </div>
    </>
  );
}
