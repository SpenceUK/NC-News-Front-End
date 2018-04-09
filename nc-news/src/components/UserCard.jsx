import React from 'react';

const UserCard = ({ user, pos }) => (
  <div className="card mb-4 col-sm-12 col-xs-12 col-md-6 col-xl-3">
    <img className="card-img-top" src={user.avatar_url} alt="Profile top" />
    <div className="card-body">
      <h5 className="card-title">{`${++pos}. ${user.username}`}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{user.name}</h6>
      <p className="m-0">Votes: {user.totalVotes}</p>
      <p className="m-0">Articles: {user.totalArticles}</p>
      <p className="m-0">Comments: {user.totalComments}</p>
    </div>
  </div>
);

export default UserCard;
