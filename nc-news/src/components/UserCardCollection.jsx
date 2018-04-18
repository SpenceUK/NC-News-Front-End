import React from 'react';
import UserCard from './UserCard';
import Chunk from 'lodash.chunk';

const UserCardCollection = ({ users }) => {
  const usersChunked = Chunk(users, 4);
  const userDisplay = () => {
    // return usersChunked.map((chunk, i) => {
    return (
      <div className="d-flex flex-wrap justify-content-xl-between justify-content-around mt-2">
        {/* <div key={i} className="row justify-content-between"> */}
        {/* {chunk.map((user, i) => { */}
        {users.map((user, i) => {
          return <UserCard key={i} user={user} pos={i} />;
        })}
      </div>
    );
    // });
  };
  if (users.length) {
    return <div id="user-cards">{userDisplay()}</div>;
  } else {
    return <div className="container mx-auto">Loading...</div>;
  }
};

export default UserCardCollection;
