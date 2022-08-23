import './main.css';
import React from 'react';
import User from '../../components/user';
import NoContent from '../../components/nocontent';
import ReposList from '../../components/RepoList';

export default function MainPage({ user, repos, reposLenght }) {
    const content = { imageConent: 'pages-img/search.svg', text: 'Start with searching a GitHub user' }

    const userPage = () => {
        if (!user) {
            return <NoContent imageConent={content.imageConent} text={content.text} />
        } else return (
            <section className="user-page">
                <User user={user} />
                <ReposList repos={repos} reposLenght={reposLenght} />
            </section>

        )
    }
    return (
        <main className="main">
            {userPage()}
        </main>
    )
}