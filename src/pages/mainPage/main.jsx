import './main.css';
import React from 'react';
import User from '../../components/user';
import NoContent from '../../components/nocontent';

export default function MainPage({ user, repos, reposLenght }) {
    const content = { imageConent: 'pages-img/search.svg', text: 'Start with searching a GitHub user' }

    const userPage = () => {
        if (!user) {
            return <NoContent imageConent={content.imageConent} text={content.text} />
        } else return (
            <User user={user} />
        )
    }
    return (
        <main className="main">
            {userPage()}
        </main>
    )
}