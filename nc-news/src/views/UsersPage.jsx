import React from 'react';
import UserCardCollection from '../components/UserCardCollection';
import Filter from '../components/Filter';
import DS from '../db/api';
import './UsersPage.css';

class UsersPage extends React.Component {
  sortByVotes = (a, b) => {
    a = a.totalVotes;
    b = b.totalVotes;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  };
  sortByArticles = (a, b) => {
    a = a.totalArticles;
    b = b.totalArticles;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  };
  sortByComments = (a, b) => {
    a = a.totalComments;
    b = b.totalComments;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  };

  sortData = sortFunction => {
    const newData = this.state.data.sort(sortFunction);
    this.setState({ newData });
  };

  componentDidMount() {
    DS.getPopularUsers().then(response => {
      const data = response.data.users;
      response.data.users.forEach((user, i) => {
        data[i].totalArticles = user.Articles.length;
        data[i].totalComments = user.Comments.length;
        data[i].totalActivity = data[i].totalArticles + data[i].totalComments;
        data[i].totalVotes =
          user.Articles.reduce((acc, a) => {
            return (acc += a.votes);
          }, 0) +
          user.Comments.reduce((acc, c) => {
            return (acc += c.votes);
          }, 0);
      });
      data.sort(this.sortByVotes);
      this.setState({ data });
    });
  }
  render() {
    if (this.state) {
      return (
        <div className="container">
          <Filter
            sortData={this.sortData}
            sortByArticles={this.sortByArticles}
            sortByComments={this.sortByComments}
            sortByVotes={this.sortByVotes}
          />
          <UserCardCollection users={this.state.data} />;
        </div>
      );
    } else {
      return <div className="conatainer">Loading....</div>;
    }
  }
}
export default UsersPage;
