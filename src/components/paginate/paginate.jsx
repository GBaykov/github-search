import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { getUserRepos } from '../../cervices/Api';
import { ACTIONS, AppContext } from '../../reducer';
import Repo from '../repo';
import Spinner from '../spinner/spinner';

function Items(repos) {
  return <>{repos.repos && repos.repos.map((repo) => <Repo repo={repo} key={repo.name} />)}</>;
}

export default function PaginatedItems({ itemsPerPage }) {
  const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  // const isComponentMounted = hooks.useComponentDidMount();

  async function addRepos(userName, currentPage) {
    try {
      const repos = await getUserRepos(userName, currentPage);
      console.log(repos, 'repos in addRepos in Paginate');
      dispatch({ type: ACTIONS.setRepos, payload: { repos } });
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    addRepos(state.userName, state.currentPage);
    setPageCount(Math.ceil(state.reposLenght / itemsPerPage));
    setIsLoading(false);
  }, [state.userName, state.currentPage]);

  // useEffect(() => {
  //   if (isComponentMounted) {
  //     setIsLoading(true);
  //     addRepos(state.userName, state.currentPage);
  //     setPageCount(Math.ceil(state.reposLenght / itemsPerPage));
  //     setIsLoading(false);
  //   }
  // }, [state.userName, state.currentPage, isComponentMounted]);

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentRepos(repos.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(repos.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, repos, pageCount]);

  const handlePageClick = (event) => {
    console.log(event);
    console.log(event.selected);
    dispatch({ type: ACTIONS.setCurrentPage, payload: { currentPage: event.selected + 1 } });
    // const newOffset = (event.selected * itemsPerPage) % repos.length;
    // setItemOffset(newOffset);
  };
  if (isLoading) return <Spinner />;

  return (
    <>
      <Items repos={state.repos} />
      <ReactPaginate
        breakLabel="..."
        // breakClassName="break-item"
        // breakLinkClassName="break-link"
        nextLabel=" next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous "
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active-page"
      />
    </>
  );
}
