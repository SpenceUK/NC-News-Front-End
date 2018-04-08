import React from 'react';
import Comment from '../components/CommentComponents/Comment';
import DS from '../db/api';
import CommentVoteButtonCollection from '../components/CommentComponents/CommentVoteButtonCollection';
import CommentDeleteButton from '../components/CommentComponents/CommentDeleteButton';

class CommentPage extends React.Component {
  componentDidMount() {
    DS.getCommentById(this.props.match.params.comment_id).then(comment => {
      this.setState({
        comment,
        current_user: JSON.parse(localStorage.getItem('user'))
      });
    });
  }

  voteOnComment = (comment_id, query) => {
    DS.voteOnComment(comment_id, query).then(response => {
      if (response.status === 204) {
        DS.getCommentById(this.props.match.params.comment_id).then(comment => {
          this.setState({ comment });
        });
      }
    });
  };

  deleteComment = comment_id => {
    DS.deleteCommentById(comment_id).then(response => {
      if (response.status === 200) {
        this.props.history.goBack();
      }
    });
  };

  render() {
    if (this.state) {
      return (
        <div className="container">
          <Comment comment={this.state.comment} />
          <div className="d-flex justify-content-between">
            <CommentVoteButtonCollection
              comment_id={this.state.comment._id}
              voteOnComment={this.voteOnComment}
            />
            {this.state.comment.created_by._id ===
            this.state.current_user._id ? (
              <CommentDeleteButton
                deleteComment={this.deleteComment}
                comment_id={this.state.comment._id}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
      );
    } else {
      return <div className="container">Loading Comment...</div>;
    }
  }
}
export default CommentPage;
