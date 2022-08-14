import React from 'react';
import './user.css';

export default function User({ user }) {
    return (
        <section className="user-block">
            <p className="user-avatar">
                <img src={`${user.avatar}`} alt="" className="user-avatar__img" />
            </p>
            <p className="user-name">{user.name}</p>
            <p className="user-login">{user.login}</p>
            <div className="user-popularity">
                <p className="user-followers">{user.followers} followers</p>
                <p className="user-following">{user.following} following</p>
            </div>
        </section>
    )
}