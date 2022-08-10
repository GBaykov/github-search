import React from 'react';
import './nocontent.css'

export default function NoContent({ imageConent = 'search.svg', text = 'Start with searching a GitHub user' }) {
    return (
        <div className="nocontent-wrapper">
            <div className="nocontent">
                <p className="imagecontent">
                    <img src={imageConent} alt="" className="imagecontent__img" />
                </p>
                <p className="central-text">{text}</p>
            </div>
        </div>

    )
}