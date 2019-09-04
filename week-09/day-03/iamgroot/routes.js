const express = require("express");
const app = express();

app.get("/groot", (req, res) => {
  if (req.query.received) {
    res.send({
      received: req.query.received,
      translated: "I am Groot!"
    });
  } else {
    res.status(400).send({
      error: "I am Groot!"
    });
  }
});

app.get("/yondu", (req, res) => {
  if (req.query.time === '0') {
    res.status(400).send({
      error: 'nem osztol nullával'
  });
} else {
      res.send({
        distance: req.query.distance,
        time: req.query.time,
        speed: req.query.distance / req.query.time
  });
}
});

module.exports = app;
