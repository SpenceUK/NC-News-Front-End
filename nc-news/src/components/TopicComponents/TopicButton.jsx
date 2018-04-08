import React from 'react';
import { NavLink } from 'react-router-dom';

const TopicButton = ({ topic, handleClick }) => (
  <NavLink to="/" className="d-inline">
    <button
      id={topic._id}
      type="button"
      onClick={handleClick}
      className="btn btn-outline btn-info mx-1"
    >
      {topic.title}
    </button>
  </NavLink>
);

export default TopicButton;
