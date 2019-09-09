const express = require("express");
const mysql = require("mysql");
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'musicplayer'
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));
