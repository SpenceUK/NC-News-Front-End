import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => (
  <Link to="/articles/articleId">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{article.votes}</h6>
        <p className="card-text">{article.text.slice(0, 20) + '...'}</p>
      </div>
    </div>
  </Link>
);

export default ArticleCard;
