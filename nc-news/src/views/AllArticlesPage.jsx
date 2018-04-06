import React from 'react';
import ArticleCardCollection from '../components/ArticleCardCollection';

class AllArticlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        { title: 'Article One', votes: 6, text: 'This is the article.' },
        { title: 'Article Two', votes: 61, text: 'This is the article text.' },
        {
          title: 'Article 3',
          votes: 16,
          text:
            'This is the article text that is the longest of all the articles.'
        }
      ]
    };
  }

  componentDidMount() {
    // fetch articles using /api/articles
  }

  render() {
    return <ArticleCardCollection articles={this.state.articles} />;
  }
}
export default AllArticlesPage;
