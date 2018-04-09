import React from 'react';
import { Link } from 'react-router-dom';
import romain from '../../images/romain.jpg';
import './articleCard.css';

const ArticleCard = ({ article }) => (
  <Link to={`/articles/${article._id}`}>
    <div className="card my-2 rounded">
      <figure>
        <img
          src={romain}
          className="card-img-top article-img"
          alt="lorem ipsum text"
        />
      </figure>
      <div className="card-body">
        <h5 className="card-title text-danger">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Votes: {article.votes}
        </h6>
        <p className="card-text">{article.body.slice(0, 100) + '...'}</p>
      </div>
    </div>
  </Link>
);

export default ArticleCard;
