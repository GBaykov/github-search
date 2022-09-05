import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Repo from '../repo';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ curentRepos }) {
    console.log(curentRepos)
    return (
        <>
            {curentRepos &&
                curentRepos.map((repo) => (
                    <Repo repo={repo} key={repo.name} />
                ))}
        </>
    );

    // if (curentRepos) {
    //     return (
    //         curentRepos.map((repo) => {
    //             return <Repo repo={repo} key={repo.name} />
    //         })
    //     )
    // }
}

export default function PaginatedItems({ itemsPerPage, repos }) {
    // We start with an empty list of items.
    const [curentRepos, setCurrentRepos] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // const [repoz, setRepoz] = useState(repos);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentRepos(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % repos.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items curentRepos={curentRepos} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}