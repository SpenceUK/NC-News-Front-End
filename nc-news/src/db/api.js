import Axios from 'axios';

const dataSourceURL = 'https://lychee-surprise-60785.herokuapp.com/api/';
const dataSource = {
  getAllArticles: () => {
    return Axios(dataSourceURL + 'articles').then(response => {
      return response.data.articles;
    });
  },
  getAllTopics: () => {
    return Axios(dataSourceURL + 'topics').then(response => {
      return response.data.topics;
    });
  },
  getArticlesByTopicId: topic_id => {
    return Axios(`${dataSourceURL}topics/${topic_id}/articles`).then(
      response => {
        return response.data.articles;
      }
    );
  }
};

export default dataSource;
