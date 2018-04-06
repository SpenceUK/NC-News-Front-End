import React from 'react';
import { NavLink } from 'react-router-dom';
import TopicButton from './TopicButton';

const TopicButtonCollection = ({ topics }) => (
  <div className="d-inline">
    <NavLink to="/" className="nav-link nav-item d-inline">
      <button type="button" className="btn btn-outline btn-info">
        All
      </button>
    </NavLink>
    {topics.map(topic => {
      return <TopicButton topic={topic} />;
    })}
  </div>
);

export default TopicButtonCollection;
