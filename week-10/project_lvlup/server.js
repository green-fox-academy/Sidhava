const express = require("express");
const mysql = require("mysql");
const PORT = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));
app.use(express.json());

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

app.post("/playlists", (req, res) => {
  console.log(req.body);
  connection.query(
    'insert into playlists (playlist) values (?)',
    [req.body.input],
    (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
        return;
      }
    }
  );
  res.redirect("/");
});

app.delete('/playlists/:playlist', (req, res) => {
  connection.query('delete from playlists where playlist = ?', [req.params.playlist], (err, rows) => {
    if (err) {
      console.log(err);
    }
  })
})

connection.connect(err => {
  if (err) throw err;
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));
