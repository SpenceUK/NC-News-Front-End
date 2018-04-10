import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: true,
      comment: false,
      article: false
    };
  }

  handleClick = event => {
    const id = event.target.id;
    switch (id) {
      case 'votes':
        this.props.sortData(this.props.sortByVotes);
        this.setState({ vote: true, comment: false, article: false });
        break;
      case 'comments':
        this.props.sortData(this.props.sortByComments);
        this.setState({ vote: false, comment: true, article: false });
        break;
      case 'articles':
        this.props.sortData(this.props.sortByArticles);
        this.setState({ vote: false, comment: false, article: true });
        break;
      default:
        event.preventDefault();
    }
  };
  render() {
    return (
      <div className="btn btn-group-sm">
        <button
          disabled={this.state.vote}
          id="votes"
          type="button"
          onClick={this.handleClick}
          className="btn btn-sm btn-success mx-1"
        >
          Votes
        </button>
        <button
          disabled={this.state.comment}
          id="comments"
          type="button"
          onClick={this.handleClick}
          className="btn btn-sm btn-success mx-1"
        >
          Comments
        </button>
        <button
          disabled={this.state.article}
          id="articles"
          type="button"
          onClick={this.handleClick}
          className="btn btn-sm btn-success mx-1"
        >
          Articles
        </button>
      </div>
    );
  }
}

export default Filter;
