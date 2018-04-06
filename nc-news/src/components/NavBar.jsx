import React from 'react';
import { NavLink } from 'react-router-dom';
import splash from '../images/northcoder-splash.png';
import TopicButtonCollection from './TopicButtonCollection';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        { title: 'Football', id: 121242346 },
        { title: 'Coding', id: 23434234261 },
        { title: 'Cooking', id: 1234234134116 }
      ]
    };
  }
  componentDidMount() {
    //fetch topics using /api/topics
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <img
          height="80%"
          width="40%"
          src={splash}
          alt="north coders news logo"
        />
        <TopicButtonCollection topics={this.state.topics} />
      </nav>
    );
  }
}
export default NavBar;
