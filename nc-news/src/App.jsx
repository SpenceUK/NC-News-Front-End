import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllArticlesPage from './views/AllArticlesPage';
import ArticlePage from './views/ArticlePage';
import CommentPage from './views/CommentPage';

const App = () => (
  <Router>
    <div className="container">
      <NavBar />
      <Route exact path="/" component={AllArticlesPage} />
      <Route path="/articles/:article_id" component={ArticlePage} />
      <Route path="/comments/:comment_id" component={CommentPage} />
    </div>
  </Router>
);

export default App;
