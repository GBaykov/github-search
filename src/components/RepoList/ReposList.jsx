import React from 'react';
import Repo from '../repos';
import './RepoList.css';

export default function ReposList({ repos, reposLenght }) {
    function repoList() {
        if (repos) {
            return (
                repos.map((repo) => {
                    console.log(repo)
                    return <Repo repo={repo} />
                })
            )
        }

    }
    return (
        <div className="repo-list">
            <h2 className="repo-list__quantity">{reposLenght}</h2>
            {repoList()}
        </div>
    )
}