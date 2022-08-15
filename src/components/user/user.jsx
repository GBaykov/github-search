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
                <p className="user-followers">
                    <img src="/icons/users-ico.svg" width="22px"
                        height="14px" alt="" />
                    {user.followers} followers</p>
                <p className="user-following">
                    <img src="/icons/person-ico.svg" width="16px"
                        height="16px" alt="" />
                    {user.following} following</p>
            </div>
        </section>
    )
}