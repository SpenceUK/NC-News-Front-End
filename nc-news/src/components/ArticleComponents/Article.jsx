import React from 'react';

const Article = ({ article }) => (
  <div className="container">
    <h1>
      {article.title}
      <br />
      <small className="text-muted">Votes: {article.votes}</small>
    </h1>
    <p>{article.body}</p>
    <hr />
  </div>
);

export default Article;
