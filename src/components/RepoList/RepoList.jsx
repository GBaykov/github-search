import React from 'react';
import Repo from '../repo copy';
import './RepoList.css';

export default function RepoList({ RepoList }) {
    function repoList(RepoList) {
        return (
            RepoList.map((repo) => {
                return <Repo repo={repo} />
            })
        )
    }
    return (
        <div className="repo-list">
            {repoList(RepoList)}
        </div>
    )
}