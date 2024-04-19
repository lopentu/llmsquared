import '../pages/Posts/Posts.css'
import React from 'react';


const Article = ({ title, description, imageUrl, readMoreUrl }) => {
    return (
        <div className="article">
            <div className="thumbnail">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={readMoreUrl}>read more</a>
            </div>
        </div>
    );
}

export default Article;
