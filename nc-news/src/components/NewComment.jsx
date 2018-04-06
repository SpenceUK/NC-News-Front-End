import React from 'react';

class NewComment extends React.Component {
  state = {
    value: '',
    article_id: this.props.article_id
  };

  handleClick = event => {
    this.props.postNewComment({
      comment: this.state.value
    });
  };

  render() {
    return (
      <form className="d-flex justify-content-center">
        <textarea
          placeholder="Add new comment.."
          name="comment"
          id="comment"
          cols="60"
          rows="5"
        />
        <br />
        <button
          type="button"
          onClick={this.props.postNewComment}
          className="btn btn-success"
        >
          Post
        </button>
      </form>
    );
  }
}

export default NewComment;
