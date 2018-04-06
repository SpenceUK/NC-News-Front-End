import React from 'react';

const Comment = ({ comment, user }) => (
  <div className="card my-2">
    <div className="card-body">
      <h5 className="card-title">{user.name}</h5>
      <p className="card-text">{comment.body}</p>
      <h6 className="card-subtitle mb-2 text-muted">Votes: {comment.votes}</h6>
    </div>
  </div>
);

export default Comment;
