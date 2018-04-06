import React from 'react';
import CommentCard from './CommentCard';

const CommentCardCollection = ({ comments }) => (
  <div className="container">
    {comments.map(comment => {
      return <CommentCard key={comment._id} comment={comment} />;
    })}
  </div>
);

export default CommentCardCollection;
