import React from 'react';
import { NavLink } from 'react-router-dom';
import TopicButton from './TopicButton';

const TopicButtonCollection = ({ topics, updateArticlesState }) => {
  const handleClick = event => {
    if (event.id === 'All') updateArticlesState();
    else updateArticlesState(event.target.id);
  };
  return (
    <div className="d-inline">
      <NavLink to="/" className="d-inline">
        <button
          id="All"
          type="button"
          onClick={handleClick}
          className="btn btn-outline btn-info"
        >
          All
        </button>
      </NavLink>
      {topics.map((topic, i) => {
        return <TopicButton key={i} topic={topic} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default TopicButtonCollection;
