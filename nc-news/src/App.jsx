import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AllArticlesPage from './views/AllArticlesPage';
import ArticlePage from './views/ArticlePage';
import CommentPage from './views/CommentPage';
import UserSplash from './components/UserSplash';
import UserPage from './views/UsersPage';

import DS from './db/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        username: '',
        avatar_url:
          'https://images.unsplash.com/photo-1491312192171-a977f62f3edc?ixlib=rb-0.3.5&s=617cb98a667d47da914eb0dbf35faeb1&auto=format&fit=crop&w=2306&q=80'
      },
      articles: []
    };
  }

  componentDidMount() {
    DS.getUser('northcoders').then(response => {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      this.setState({ user: response.data.user });
    });
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

  getArticleFromStateById = article_id => {
    return this.state.articles.filter(article => article._id === article_id);
  };

  render() {
    return (
      <Router>
        <div className="container mt-0">
          <UserSplash user={this.state.user} />
          <NavBar updateArticlesState={this.updateArticlesState} />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <AllArticlesPage
                  {...props}
                  articles={this.state.articles}
                  getArticleFromStateById={this.getArticleFromStateById}
                />
              );
            }}
          />
          <Route
            path="/articles/:article_id"
            render={props => {
              return (
                <ArticlePage
                  {...props}
                  getArticleFromStateById={this.getArticleFromStateById}
                />
              );
            }}
          />
          <Route path="/comments/:comment_id" component={CommentPage} />
          <Route path="/users" component={UserPage} />
        </div>
      </Router>
    );
  }
}

export default App;
