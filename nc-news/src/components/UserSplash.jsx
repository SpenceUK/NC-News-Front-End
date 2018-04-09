import React from 'react';
import './UserSplash.css';

class UserSplash extends React.Component {
  render() {
    return (
      <div className="container-fluid user-splash">
        <h1 className="p-2">{this.props.user.name}</h1>
      </div>
    );
  }
}
export default UserSplash;
