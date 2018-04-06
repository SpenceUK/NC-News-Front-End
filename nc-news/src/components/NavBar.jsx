import React from 'react';
import splash from '../images/northcoder-splash.png';
import TopicButtonCollection from './TopicButtonCollection';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        { title: 'loading', id: 121242346 },
        { title: 'loading', id: 23434234261 },
        { title: 'loading', id: 1234234134116 }
      ]
    };
  }
  componentDidMount() {
    //fetch topics using /api/topics
    this.setState({
      topics: [
        {
          _id: '5ac0fa41cd94071068f378db',
          title: 'Coding',
          slug: 'coding',
          __v: 0
        },
        {
          _id: '5ac0fa41cd94071068f378dc',
          title: 'Football',
          slug: 'football',
          __v: 0
        },
        {
          _id: '5ac0fa41cd94071068f378dd',
          title: 'Cooking',
          slug: 'cooking',
          __v: 0
        }
      ]
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
        <TopicButtonCollection
          topics={this.state.topics}
          updateArticlesState={this.props.updateArticlesState}
        />
      </nav>
    );
  }
}
export default NavBar;
