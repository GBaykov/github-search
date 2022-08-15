import React from 'react';
import './repo.css';

export default function Repo({ repo }) {
    return (
        <div className="repo">
            <div className="repo__content">
                <p className="repo__content-title repo-title">
                    <a href={repo.html_url} className="repo-title__link">
                        {repo.title}
                    </a>
                </p>
                <p className="repo__content-text">{repo.text}</p>
            </div>
        </div>
    )
}