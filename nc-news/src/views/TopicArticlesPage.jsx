import React from 'react';
import ArticleCardCollection from '../components/ArticleCardCollection';

class AllArticlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: 'One Article Of Secific Topic',
          votes: 6,
          text: 'This is the article.'
        },
        {
          title: 'Article Two odf a specific topic',
          votes: 61,
          text: 'This is the article text.'
        },
        {
          title: 'Article 3 of a topic',
          votes: 16,
          text:
            'This is the article text that is the longest of all the articles.'
        }
      ]
    };
  }

  componentDidMount() {
    // fetch articles using /api/topics/topic_id/articles
  }

  render() {
    return <ArticleCardCollection articles={this.state.articles} />;
  }
}
export default AllArticlesPage;
