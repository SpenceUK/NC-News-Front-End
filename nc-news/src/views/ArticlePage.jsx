import React from 'react';
import Article from '../components/ArticleComponents/Article';
import NewComment from '../components/CommentComponents/NewComment';
import CommentCardCollection from '../components/CommentComponents/CommentCardCollection';
import DS from '../db/api';
import ArticleVoteButtonCollection from '../components/ArticleComponents/ArticleVoteButtonCollection';

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

  voteOnArticle = (article_id, query) => {
    DS.voteOnArticle(article_id, query).then(response => {
      if (response.status === 204) {
        DS.getArticleById(this.props.match.params.article_id).then(article => {
          this.setState({ article });
        });
      }
    });
  };

  postNewComment = (article_id, comment) => {
    DS.postNewComment(article_id, comment)
      .then(response => {
        if (response.status === 201) {
          DS.getArticleById(this.props.match.params.article_id).then(
            article => {
              this.setState({
                article: article
              });
            }
          );
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.article) {
      return (
        <div className="container-fluid">
          <Article article={this.state.article} />
          <div className="d-flex justify-content-between mb-3">
            <ArticleVoteButtonCollection
              article_id={this.props.match.params.article_id}
              voteOnArticle={this.voteOnArticle}
            />
          </div>
          <div className="container">
            <NewComment
              article_id={this.state.article._id}
              postNewComment={this.postNewComment}
            />
          </div>
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
