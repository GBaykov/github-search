import './main.css';
import React from 'react';
import NoContent from '../../components/nocontent';

export default function MainPage() {
    const content = { imageConent: 'pages-img/search.svg', text: 'Start with searching a GitHub user' }
    return (
        <main className="main">
            <NoContent imageConent={content.imageConent} text={content.text} />
        </main>
    )
}