import React from 'react';
import PaginatedItems from '../paginate';
import Repo from '../repo';
import './RepoList.css';

export default function ReposList({ repos, reposLenght }) {
    function repoList() {
        if (repos) {
            return (
                repos.map((repo) => {
                    return <Repo repo={repo} key={repo.name} />
                })
            )
        }

    }
    return (
        <section className="repo-list">
            <h2 className="repo-list__quantity">Repositories ({reposLenght})</h2>
            {/* {repoList()} */}
            <PaginatedItems repos={repos} itemsPerPage={4} />

        </section>
    )
}