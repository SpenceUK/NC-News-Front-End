import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardCollection = ({ articles }) => {
  return (
    <div className="container">
      {articles.map(article => {
        return <ArticleCard key={article._id} article={article} />;
      })}
    </div>
  );
};

export default ArticleCardCollection;
