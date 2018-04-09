import React from 'react';

class NewComment extends React.Component {
  state = {
    value: '',
    article_id: this.props.article_id
  };

  handleClick = event => {
    this.props.postNewComment(this.state.article_id, {
      comment: this.state.value,
      created_by: '5ac91ebd13c0e94d169413ea'
    });
    this.setState({ value: '' });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
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
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button
          type="button"
          onClick={this.handleClick}
          className="btn btn-success ml-2"
        >
          Post
        </button>
      </form>
    );
  }
}

export default NewComment;
