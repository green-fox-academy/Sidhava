const express = require("express");
const mysql = require("mysql");
const PORT = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "musicplayer"
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/playlists", (req, res) => {
  connection.query("select playlist from playlists", (err, rows) => {
    res.send(rows);
  });
});

app.get("/playlist-tracks", (req, res) => {
  connection.query("select * from tracks", (err, rows) => {
    res.send(rows);
  });
});

connection.connect(err => {
  if (err) throw err;
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));
