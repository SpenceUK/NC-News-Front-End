import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllArticlesPage from './views/AllArticlesPage';
import ArticlePage from './views/ArticlePage';
import CommentPage from './views/CommentPage';
import DS from './db/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    DS.getAllArticles().then(articles => {
      this.setState({ articles: articles });
    });
  }

  updateArticlesState = (topic_id = 'All') => {
    if (topic_id === 'All') {
      DS.getAllArticles().then(articles => {
        this.setState({ articles: articles });
      });
    } else {
      DS.getArticlesByTopicId(topic_id).then(articles => {
        this.setState({ articles: articles });
      });
    }
  };

  getArticleById = article_id => {
    return this.state.articles.filter(article => article._id === article_id);
  };

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar updateArticlesState={this.updateArticlesState} />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <AllArticlesPage
                  {...props}
                  articles={this.state.articles}
                  getArticleById={this.getArticleById}
                />
              );
            }}
          />
          <Route
            path="/articles/:article_id"
            render={props => {
              return (
                <ArticlePage {...props} getArticleById={this.getArticleById} />
              );
            }}
          />
          {/* <Route path="/articles/:article_id" component={ArticlePage} /> */}
          <Route path="/comments/:comment_id" component={CommentPage} />
        </div>
      </Router>
    );
  }
}

export default App;
