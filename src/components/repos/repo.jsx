import React from 'react';
export default function Repo({ repo }) {
    return (
        <section className="repos">
            <h2 className="repos-name">{repo.name}</h2>
            <p className="repos-discription">{repo.description}</p>
        </section>
    )
}