import React from 'react';
import { Link } from 'react-router-dom';

class ArticlePage extends React.Component {
  state = {};

  postNewComment = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1>Article Title</h1>
        <p>Article Body</p>
        <hr />
        <form>
          <textarea name="comment" id="comment" cols="60" rows="5" />
          <br />
          <button onClick={this.postNewComment} className="btn btn-success">
            Post
          </button>
        </form>
        <hr />
        <div>
          comments:
          <Link to="/comments/commentId">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Comment text ...</p>
                <h5 className="card-title">user name</h5>
                <h6 className="card-subtitle mb-2 text-muted">Votes: ??</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default ArticlePage;
