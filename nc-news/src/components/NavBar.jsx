import React from 'react';
import { Link } from 'react-router-dom';
import splash from '../images/northcoder-splash.png';
import TopicButtonCollection from './TopicComponents/TopicButtonCollection';
import DS from '../db/api';

const navStyle = {
  top: '-2px'
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    DS.getAllTopics().then(topics => {
      this.setState({ topics: topics });
    });
  }

  render() {
    return (
      <nav
        style={navStyle}
        className="navbar navbar-light sticky-top bg-white mt-0"
      >
        <img
          height="80%"
          width="40%"
          src={splash}
          alt="north coders news logo"
        />
        <div className="d-inline">
          <div className="float-left">
            <ul className="nav nav-pills">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ✚
                </a>
                <div className="dropdown-menu">
                  <Link to="/users" className="dropdown-item">
                    Most Active Users
                  </Link>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item">Logout</a>
                </div>
              </li>
            </ul>
          </div>
          {this.state.topics ? (
            <TopicButtonCollection
              topics={this.state.topics}
              updateArticlesState={this.props.updateArticlesState}
            />
          ) : (
            <div>Loading Topics...</div>
          )}
        </div>
      </nav>
    );
  }
}
export default NavBar;
