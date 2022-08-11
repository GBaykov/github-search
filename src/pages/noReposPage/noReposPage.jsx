import './noReposPage.css';
import React from 'react';
import NoContent from '../../components/nocontent';

export default function noReposPage() {
    const content = { imageConent: 'pages-img/noReposSvg.svg', text: 'Repository list is empty' }
    return (
        <main className="main">
            <NoContent imageConent={content.imageConent} text={content.text} />
        </main>
    )
}