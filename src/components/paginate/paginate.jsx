import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Repo from '../repo';

function Items({ curentRepos }) {
  console.log(curentRepos);
  return <>{curentRepos && curentRepos.map((repo) => <Repo repo={repo} key={repo.name} />)}</>;
}

export default function PaginatedItems({ itemsPerPage, repos }) {
  const [curentRepos, setCurrentRepos] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentRepos(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, repos, pageCount]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items curentRepos={curentRepos} />
      <ReactPaginate
        breakLabel="..."
        // breakClassName="break-item"
        // breakLinkClassName="break-link"
        nextLabel=" next >"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={3}
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
