import React from 'react';
import { NavLink } from 'react-router-dom';

const TopicButton = ({ topic }) => (
  <li class="nav-item">
    <NavLink to={`/topics/${topic.id}/articles`} class="nav-link text-white">
      {topic.title}
    </NavLink>
  </li>
);

export default TopicButton;
