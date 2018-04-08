import React from 'react';

class VoteButtonCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }
  handleClick = event => {
    const query = event.target.id;
    this.props.voteOnComment(this.props.comment_id, query);
    this.setState({ disabled: true });
  };

  render() {
    return (
      <form className="ml-2">
        <button
          disabled={this.state.disabled}
          id="up"
          onClick={this.handleClick}
          className="btn btn-primary m-1"
          type="button"
        >
          Up Vote
        </button>
        <button
          disabled={this.state.disabled}
          id="down"
          onClick={this.handleClick}
          className="btn btn-warning m-1"
          type="button"
        >
          Down Vote
        </button>
      </form>
    );
  }
}
export default VoteButtonCollection;
