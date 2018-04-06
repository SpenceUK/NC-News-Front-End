import React from 'react';
import Article from '../components/Article';
import NewComment from '../components/NewComment';
import CommentCardCollection from '../components/CommentCardCollection';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        id: '12345657',
        title: `Example article id:${this.props.match.params.article_id}`,
        body:
          "This is the text of the article, it's content: shdkhs khfksjhdfkshfsdhj shdfsfhksh fdk jsfhs kjhfks jhfkjshdfkjsh dfkjshfkjsd hfkhdfkshf kjfsfsdfhkd sdhfksdhfk jshf",
        votes: 0
      },
      comments: [
        {
          _id: '5ac0fa42cd94071068f37912',
          body:
            'Who ever has written this is a Computers, I really copy with this article! I think they should index Bedfordshire. Why do they think Harbors is a good idea? what a total ADP! I feel like a silver.',
          belongs_to: '5ac0fa42cd94071068f378e5',
          created_by: '5ac0fa42cd94071068f378e0',
          votes: 1,
          created_at: '2013-04-05T01:39:06.000Z',
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f3795a',
          body:
            'Who ever has written this is a Towels, I really compress with this article! I think they should copy Rustic. Why do they think ubiquitous is a good idea? what a total transmitter! I feel like a card.',
          belongs_to: '5ac0fa42cd94071068f378e5',
          created_by: '5ac0fa42cd94071068f378de',
          votes: 36,
          created_at: '2011-01-19T04:32:08.000Z',
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f37977',
          body:
            'Who ever has written this is a New Leu, I really hack with this article! I think they should reboot Towels. Why do they think Steel is a good idea? what a total De-engineered! I feel like a bifurcated.',
          belongs_to: '5ac0fa42cd94071068f378e5',
          created_by: '5ac0fa42cd94071068f378de',
          votes: 25,
          created_at: '2003-01-16T19:25:15.000Z',
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f3797e',
          body:
            'Who ever has written this is a Croatian Kuna, I really back up with this article! I think they should quantify e-markets. Why do they think Movies is a good idea? what a total Ergonomic Fresh Bike! I feel like a bifurcated.',
          belongs_to: '5ac0fa42cd94071068f378e5',
          created_by: '5ac0fa42cd94071068f378de',
          votes: 8,
          created_at: '2015-07-24T04:08:52.000Z',
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f3798c',
          body:
            'Who ever has written this is a website, I really synthesize with this article! I think they should override Open-architected. Why do they think Credit Card Account is a good idea? what a total backing up! I feel like a Unbranded.',
          belongs_to: '5ac0fa42cd94071068f378e5',
          created_by: '5ac0fa42cd94071068f378e3',
          votes: 22,
          created_at: '2003-01-26T22:55:53.000Z',
          __v: 0
        }
      ]
    };
  }

  componentDidMount() {
    //fetch article using article_id param
    // api/articles/article_id/comments
  }

  postNewComment = comment => {
    // add comment
  };

  render() {
    return (
      <div className="container-fluid">
        <Article article={this.state.article} />
        <NewComment
          postNewComment={this.postNewComment}
          article_id={this.state.article.id}
        />
        <hr />
        <CommentCardCollection comments={this.state.comments} />
      </div>
    );
  }
}
export default ArticlePage;
