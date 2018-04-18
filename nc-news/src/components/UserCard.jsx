import React from 'react';

const UserCard = ({ user, pos }) => (
  <div className="card d-inline-flex mt-3 mx-1">
    <img
      className="card-img-top rounded"
      src={user.avatar_url}
      onError={e =>
        (e.target.src =
          'https://images.unsplash.com/photo-1521687296887-5b06b3519a11?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=df38c12e6cbd222d0479a43c6f4c7ec0&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80')
      }
      alt="Profile top"
    />
    <div className="card-body">
      <h3 className="card-title text-danger">{`${++pos}. ${user.username}`}</h3>
      <h6 className="card-subtitle mb-2 text-muted">{user.name}</h6>
      <p className="m-0">Votes: {user.totalVotes}</p>
      <p className="m-0">Articles: {user.totalArticles}</p>
      <p className="m-0">Comments: {user.totalComments}</p>
    </div>
  </div>
);

export default UserCard;
