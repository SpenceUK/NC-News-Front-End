import React from 'react';

const CommentDeleteButton = ({ deleteComment, comment_id }) => {
  const handleClick = event => {
    deleteComment(comment_id);
  };
  return (
    <form className="mr-2">
      <button
        id="delete"
        onClick={handleClick}
        className="btn btn-danger"
        type="button"
      >
        Delete
      </button>
    </form>
  );
};

export default CommentDeleteButton;
