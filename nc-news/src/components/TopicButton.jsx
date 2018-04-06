import React from 'react';
import { NavLink } from 'react-router-dom';

const TopicButton = ({ topic }) => (
  <NavLink
    to={`/topics/${topic.id}/articles`}
    className="nav-link nav-item d-inline"
  >
    <button type="button" className="btn btn-outline btn-info">
      {topic.title}
    </button>
  </NavLink>
);

export default TopicButton;
