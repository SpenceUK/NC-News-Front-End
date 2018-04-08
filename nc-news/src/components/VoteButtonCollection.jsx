import React from 'react';

const VoteButtonCollection = ({ voteOnComment, comment_id }) => {
  const handleClick = event => {
    const query = event.target.id === 'up' ? 'up' : 'down';
  };
  return (
    <form className="ml-2">
      <button
        id="up"
        onClick={handleClick}
        className="btn btn-primary m-1"
        type="button"
      >
        Up Vote
      </button>
      <button
        id="down"
        onClick={handleClick}
        className="btn btn-warning m-1"
        type="button"
      >
        Down Vote
      </button>
    </form>
  );
};
export default VoteButtonCollection;
