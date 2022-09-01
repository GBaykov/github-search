import React from 'react';
import './repo.css';

export default function Repo({ repo }) {
    return (
        <div className="repo">
            <div className="repo__content">
                <p className="repo__content-name repo-name">
                    <a href={repo.url} className="repo-name__url">
                        {repo.name}
                    </a>
                </p>
                <p className="repo__content-description">{repo.description}</p>
            </div>
        </div>
    )
}