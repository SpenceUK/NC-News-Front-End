import React from 'react';
import ArticleCardCollection from '../components/ArticleCardCollection';

const AllArticlesPage = props => (
  <ArticleCardCollection articles={props.articles} />
);
export default AllArticlesPage;
