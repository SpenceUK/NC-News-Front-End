import Axios from 'axios';

const dataSourceURL = 'https://lychee-surprise-60785.herokuapp.com/api/';
const dataSource = {
  getAllArticles: () => {
    return Axios(dataSourceURL + 'articles').then(
      response => response.data.articles
    );
  },
  getArticleById: article_id => {
    return Axios(`${dataSourceURL}articles/${article_id}/comments`).then(
      response => response.data.article
    );
  },
  voteOnArticle: (article_id, query) => {
    return Axios.put(
      `${dataSourceURL}articles/${article_id}?vote=${query}`
    ).then(response => response);
  },
  getArticlesByTopicId: topic_id => {
    return Axios(`${dataSourceURL}topics/${topic_id}/articles`).then(
      response => response.data.articles
    );
  },
  getAllTopics: () => {
    return Axios(`${dataSourceURL}topics`).then(
      response => response.data.topics
    );
  },
  postNewComment: (article_id, comment) => {
    return Axios.post(
      `${dataSourceURL}articles/${article_id}/comments`,
      comment
    ).then(response => response);
  },
  getCommentById: comment_id => {
    return Axios(`${dataSourceURL}comments/${comment_id}`).then(
      response => response.data.comment
    );
  },
  deleteCommentById: comment_id => {
    return Axios.delete(`${dataSourceURL}comments/${comment_id}`).then(
      response => response
    );
  },
  voteOnComment: (comment_id, query) => {
    return Axios.put(
      `${dataSourceURL}comments/${comment_id}?vote=${query}`
    ).then(response => response);
  },
  getUser: username => {
    return Axios(`${dataSourceURL}users/${username}`).then(
      response => response
    );
  },
  getPopularUsers: () => {
    return Axios(`${dataSourceURL}users/`).then(response => response);
  }
};

export default dataSource;
