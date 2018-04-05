import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div>
          Articles
          <Link to="/articles/articleId">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Article Title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Votes: ??</h6>
                <p className="card-text">Article text snippet.....</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default HomePage;
