import Axios from 'axios';

const dataSourceURL = 'https://lychee-surprise-60785.herokuapp.com/api/';
const dataSource = {
  getAllArticles: () => {
    return Axios(dataSourceURL + 'articles').then(response => {
      return response.data.articles;
    });
  },
  getArticleById: article_id => {
    return Axios(`${dataSourceURL}articles/${article_id}/comments`).then(
      response => response.data.article
    );
  },
  getArticlesByTopicId: topic_id => {
    return Axios(`${dataSourceURL}topics/${topic_id}/articles`).then(
      response => {
        return response.data.articles;
      }
    );
  },
  getAllTopics: () => {
    return Axios(dataSourceURL + 'topics').then(response => {
      return response.data.topics;
    });
  }
};

export default dataSource;
