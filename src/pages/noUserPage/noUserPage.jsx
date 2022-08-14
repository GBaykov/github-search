import './noUserPage.css';
import React from 'react';
import NoContent from '../../components/nocontent';

export default function NoUserPage() {
    const content = { imageConent: 'pages-img/noUserSvg.svg', text: 'User not found' }
    return (
        <main className="main">
            <NoContent imageConent={content.imageConent} text={content.text} />
        </main>
    )
}