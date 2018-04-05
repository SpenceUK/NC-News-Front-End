import React from 'react';

class CommentPage extends React.Component {
  state = {};

  voteOnComment = event => {
    event.preventDefault();
  };

  deleteComment = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="card my-2">
          <div className="card-body">
            <p className="card-text">Comment text ...</p>
            <h5 className="card-title">user name</h5>
            <h6 className="card-subtitle mb-2 text-muted">Votes: ??</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <form className="ml-2">
            <button
              id="up"
              onClick={this.voteOnComment}
              className="btn btn-primary m-1"
            >
              Up Vote
            </button>
            <button
              id="down"
              onClick={this.voteOnComment}
              className="btn btn-warning m-1"
            >
              Down Vote
            </button>
          </form>
          <form className="mr-2">
            <button onClick={this.deleteComment} className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default CommentPage;
