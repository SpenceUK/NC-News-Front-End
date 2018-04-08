import React from 'react';
import Article from '../components/Article';
import NewComment from '../components/NewComment';
import CommentCardCollection from '../components/CommentCardCollection';
import DS from '../db/api';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleFromState: this.props.getArticleFromStateById(
        this.props.match.params.article_id
      )[0]
    };
  }

  componentDidMount() {
    DS.getArticleById(this.props.match.params.article_id).then(article => {
      this.setState({
        article: article
      });
    });
  }

  postNewComment = comment => {
    // add comment
  };

  render() {
    if (this.state.article) {
      return (
        <div className="container-fluid">
          <Article article={this.state.article} />
          <NewComment
            postNewComment={this.postNewComment}
            article_id={this.state.article._id}
          />
          <hr />
          <CommentCardCollection comments={this.state.article.Comments} />;
        </div>
      );
    } else if (this.state.articleFromState) {
      return (
        <div className="container-fluid">
          <Article article={this.state.articleFromState} />
          <NewComment
            postNewComment={this.postNewComment}
            article_id={this.state.articleFromState._id}
          />
          <hr />
          <div>Loading comments...</div>
        </div>
      );
    } else {
      return <div className="conatiner">Loading Article...</div>;
    }
  }
}
export default ArticlePage;
