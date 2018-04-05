import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardCollection = ({ articles }) => (
  <div className="container">
    {articles.map(article => {
      return <ArticleCard article={article} />;
    })}
  </div>
);

export default ArticleCardCollection;
