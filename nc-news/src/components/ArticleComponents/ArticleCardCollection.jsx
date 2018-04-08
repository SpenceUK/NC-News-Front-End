import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardCollection = ({ articles }) => {
  if (articles.length) {
    return (
      <div className="container">
        {articles.map(article => {
          return <ArticleCard key={article._id} article={article} />;
        })}
      </div>
    );
  } else {
    return <div className="container">Loading...</div>;
  }
};

export default ArticleCardCollection;
