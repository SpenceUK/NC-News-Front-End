import React from 'react';
import UserCard from './UserCard';
import Chunk from 'lodash.chunk';

const UserCardCollection = ({ users }) => {
  const usersChunked = Chunk(users, 4);
  const userDisplay = () => {
    return usersChunked.map((chunk, i) => {
      return (
        <div key={i} className="row justify-content-between">
          {chunk.map((user, i) => {
            return <UserCard key={i} user={user} pos={i} />;
          })}
        </div>
      );
    });
  };
  if (users.length) {
    return <div className="container mt-2">{userDisplay()}</div>;
  } else {
    return <div className="container">Loading...</div>;
  }
};

export default UserCardCollection;
