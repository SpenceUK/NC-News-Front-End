import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllArticlesPage from './views/AllArticlesPage';
import ArticlePage from './views/ArticlePage';
import CommentPage from './views/CommentPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          _id: '5ac0fa42cd94071068f378e4',
          title: 'Running a Node App',
          body:
            'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378e1',
          votes: 0,
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f378e6',
          title: '22 Amazing open source React projects',
          body:
            'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378e2',
          votes: 0,
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f378e7',
          title: 'Making sense of Redux',
          body:
            'When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378de',
          votes: 0,
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f378e5',
          title:
            "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
          body:
            'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378df',
          votes: 0,
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f378e8',
          title: 'Please stop worrying about Angular 3',
          body:
            'Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378df',
          votes: 0,
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f378e9',
          title:
            'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
          body:
            'Functions are objects in JavaScript, as you should know by now, if you have read any of the prerequisite articles. And as objects, functions have methods, including the powerful Apply, Call, and Bind methods. On the one hand, Apply and Call are nearly identical and are frequently used in JavaScript for borrowing methods and for setting the this value explicitly. We also use Apply for variable-arity functions; you will learn more about this in a bit.',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378e1',
          votes: 0,
          __v: 0
        },
        {
          _id: '5ac0fa42cd94071068f378ea',
          title: 'Using React Native: One Year Later',
          body:
            'When I interviewed for the iOS developer opening at Discord last spring, the tech lead Stanislav told me: React Native is the future. We will use it to build our iOS app from scratch as soon as it becomes public. As a native iOS developer, I strongly doubted using web technologies to build mobile apps because of my previous experiences with tools like PhoneGap. But after learning and using React Native for a while, I am glad we made that decision.',
          belongs_to: '5ac0fa41cd94071068f378db',
          created_by: '5ac0fa42cd94071068f378df',
          votes: 0,
          __v: 0
        }
      ]
    };
  }

  componentDidMount() {
    // fetch all articles
  }

  updateArticlesState = topic_id => {
    if (topic_id === 'All') {
      //fetch all articles
      this.setState({
        articles: [
          {
            _id: '5ac0fa42cd94071068f378e4',
            title: 'Running a Node App',
            body:
              'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378e1',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378e6',
            title: '22 Amazing open source React projects',
            body:
              'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378e2',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378e7',
            title: 'Making sense of Redux',
            body:
              'When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378de',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378e5',
            title:
              "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
            body:
              'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378df',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378e8',
            title: 'Please stop worrying about Angular 3',
            body:
              'Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378df',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378e9',
            title:
              'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
            body:
              'Functions are objects in JavaScript, as you should know by now, if you have read any of the prerequisite articles. And as objects, functions have methods, including the powerful Apply, Call, and Bind methods. On the one hand, Apply and Call are nearly identical and are frequently used in JavaScript for borrowing methods and for setting the this value explicitly. We also use Apply for variable-arity functions; you will learn more about this in a bit.',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378e1',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378ea',
            title: 'Using React Native: One Year Later',
            body:
              'When I interviewed for the iOS developer opening at Discord last spring, the tech lead Stanislav told me: React Native is the future. We will use it to build our iOS app from scratch as soon as it becomes public. As a native iOS developer, I strongly doubted using web technologies to build mobile apps because of my previous experiences with tools like PhoneGap. But after learning and using React Native for a while, I am glad we made that decision.',
            belongs_to: '5ac0fa41cd94071068f378db',
            created_by: '5ac0fa42cd94071068f378df',
            votes: 0,
            __v: 0
          }
        ]
      });
    } else {
      //fetch articles by topic id
      this.setState({
        articles: [
          {
            _id: '5ac0fa42cd94071068f378f6',
            title: 'Who are the most followed clubs and players on Instagram?',
            body:
              "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m), while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
            belongs_to: '5ac0fa41cd94071068f378dc',
            created_by: '5ac0fa42cd94071068f378e1',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378f4',
            title: 'Which current Premier League manager was the best player?',
            body:
              "Premier League managers work with some of the top players in world football - but were they any good in their day? From European Cup and league title winners to one manager who only played at university, there's a diverse range of experience among the top-flight bosses. We've taken a look at the playing achievements and ability of the current Premier League managers and ranked them. Read on to see who ranks where...",
            belongs_to: '5ac0fa41cd94071068f378dc',
            created_by: '5ac0fa42cd94071068f378e0',
            votes: 0,
            __v: 0
          },
          {
            _id: '5ac0fa42cd94071068f378f7',
            title: 'History of Football',
            body:
              'It may come as a surprise to many, but football has a long and interesting history; sources suggest that the sport was first introduced in England as early as 1170 when an account describes youths going to the fields for a ‘game of ball’. Aspects of the game can even be traced back to as early as the second and third century BC in China. Sources taken from military manuals at the time describe an exercise called Tsu’ Chu, in which opponents used a leather ball filled with feathers and hair. The aim was to get the ball into a small net fixed on to bamboo canes while also defending themselves from attacks. Variations of the game are also documented in Egyptian and Greek society, proving that the sport has a long tradition throughout history.',
            belongs_to: '5ac0fa41cd94071068f378dc',
            created_by: '5ac0fa42cd94071068f378de',
            votes: 0,
            __v: 0
          }
        ]
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar updateArticlesState={this.updateArticlesState} />
          <Route
            exact
            path="/"
            render={props => {
              return (
                <AllArticlesPage {...props} articles={this.state.articles} />
              );
            }}
          />
          <Route path="/articles/:article_id" component={ArticlePage} />
          <Route path="/comments/:comment_id" component={CommentPage} />
        </div>
      </Router>
    );
  }
}

export default App;
