import React from 'react';
import Comment from '../components/Comment';

class CommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        _id: '5ac0fa42cd94071068f3797e',
        body:
          'Who ever has written this is a Croatian Kuna, I really back up with this article! I think they should quantify e-markets. Why do they think Movies is a good idea? what a total Ergonomic Fresh Bike! I feel like a bifurcated.',
        belongs_to: '5ac0fa42cd94071068f378e5',
        created_by: '5ac0fa42cd94071068f378de',
        votes: 8,
        created_at: '2015-07-24T04:08:52.000Z'
      },
      user: {
        _id: '5ac0fa42cd94071068f378e3',
        username: 'jessjelly',
        name: 'Jess Jelly',
        avatar_url:
          'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
        __v: 0
      }
    };
  }

  componentDidMount() {
    //fetch comment /api/comments/comment_id
    //fetch user
  }

  voteOnComment = event => {
    event.preventDefault();
  };

  deleteComment = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <Comment comment={this.state.comment} user={this.state.user} />
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
