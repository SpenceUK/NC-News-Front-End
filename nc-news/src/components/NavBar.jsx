import React from 'react';
import splash from '../images/northcoder-splash.png';
import TopicButtonCollection from './TopicButtonCollection';
import DS from '../db/api';

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
      <nav className="navbar navbar-light">
        <img
          height="80%"
          width="40%"
          src={splash}
          alt="north coders news logo"
        />
        {this.state.topics ? (
          <TopicButtonCollection
            topics={this.state.topics}
            updateArticlesState={this.props.updateArticlesState}
          />
        ) : (
          <div>Loading Topics...</div>
        )}
      </nav>
    );
  }
}
export default NavBar;
