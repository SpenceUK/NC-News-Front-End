import React from 'react';
import { Link } from 'react-router-dom';

const CommentCard = ({ comment }) => (
  <Link to={`/comments/${comment.id}`}>
    <div className="card">
      <div className="card-body">
        <p className="card-text">{comment.body}</p>
        <p className="card-subtitle mb-2 text-muted">Votes: {comment.votes}</p>
      </div>
    </div>
  </Link>
);

export default CommentCard;
