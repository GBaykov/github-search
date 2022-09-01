import './noReposPage.css';
import React from 'react';
import NoContent from '../../components/nocontent';
import User from '../../components/user';

export default function NoReposPage({ user }) {
    const content = { imageConent: 'pages-img/noReposSvg.svg', text: 'Repository list is empty' }
    return (
        <main className="main">
            <User user={user} />
            <NoContent imageConent={content.imageConent} text={content.text} />
        </main>
    )
} 