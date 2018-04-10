# North Coders News Front End project

---

Front End for a Reddit style news aggregation app.
View articles and comments, ability to add comments and delete your comments. Vote up or down for articles and comments and then view users filtering by popularity of votes or numbers of articles or comments.

## Getting Started

---

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the repository to a directory on your local machine:

```js
git clone https://github.com/SpenceUK/NC-News-Front-End.git
```

Open the directory and install it’s dependencies:

```js
cd NC-news-Front-End/nc-news
npm i
```

To start a development environment:

```js
npm run start
```

This will launch a server and live version of your app, you can make changes to your code and on save these changes will be reflected on the live page.

## Deployment

---

To deploy I recommend netlify, to install:

```js
npm i netlify
```

Create a build package from the project, navigate to your project directory:

```js
cd NC-news-Front-End/nc-news
npm run build
```

Navigate to your build folder an deploy

```js
cd NC-news-Front-End/nc-news/build
netlify deploy
```

### Built With

React JS - front end framework
Bootstrap - CSS framework

### Authors

Christopher Spence

### Acknowledgments

Facebook
Reddit
Bootstrap
Unsplash
