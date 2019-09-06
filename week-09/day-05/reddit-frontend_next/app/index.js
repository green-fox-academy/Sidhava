const express = require('express');
const fetch = require('node-fetch');
/* const mysql = require('mysql'); */


const app = express();

/* const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'ca'
}); */

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

app.get('/post', (req, res) => {
  res.render('index');
});

app.get('/api/posts', (req, res) => {
  fetch('http://secure-reddit.herokuapp.com/simple/posts')
    .then(answer => answer.json())
    .then(json => res.render('posts', { posts: json.posts }));
});

module.exports = app;