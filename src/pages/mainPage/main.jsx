import './main.css';
import React from 'react';
import User from '../../components/user';

export default function MainPage({ user }) {
    // const content = { imageConent: 'pages-img/search.svg', text: 'Start with searching a GitHub user' }
    return (
        <main className="main">
            <User user={user} />
            {/* <NoContent imageConent={content.imageConent} text={content.text} /> */}
        </main>
    )
}