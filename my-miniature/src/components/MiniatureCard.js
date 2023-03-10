import React from 'react'
import { Link } from 'react-router-dom';

function MiniatureCard({ miniature }) {
    return(
        <Link to={`/miniatures/${miniature.id}`}>
            <div className="card">
                <div className="card-image">
                    <img src={miniature.img-url} alt="Image not available."/>
                </div>
                <div className="card-name">{miniature.name}</div>
            </div>
        </Link>
    )
}

export default MiniatureCard