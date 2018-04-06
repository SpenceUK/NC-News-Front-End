import React from 'react';
import { NavLink } from 'react-router-dom';
import TopicButton from './TopicButton';

const TopicButtonCollection = ({ topics }) => (
  <ul class="nav nav-tabs color-white">
    <li class="nav-item">
      <NavLink to="/" class="nav-link text-white">
        All
      </NavLink>
    </li>
    {topics.map(topic => {
      return <TopicButton topic={topic} />;
    })}
  </ul>
);

export default TopicButtonCollection;
