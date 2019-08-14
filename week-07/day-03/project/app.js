const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.static("assets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/doubling", (req, res) => {
  if (req.query.input) {
    res.send({
      received: req.query.input * 1,
      result: req.query.input * 2
    });
  } else {
    res.send({
      error: "Please provide an input"
    });
  }
});

app.get("/greeter", (req, res) => {
  if (req.query.name && req.query.title) {
    res.send({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${
        req.query.title
      }!`
    });
  } else if (req.query.name == undefined && req.query.title == undefined) {
    res.send({
      error: "Please provide a name and a title!"
    });
  } else if (req.query.name == undefined && req.query.title) {
    res.send({
      error: "Please provide a name!"
    });
  } else {
    res.send({
      error: "Please provide a title"
    });
  }
});

app.get("/appenda/:appendable", (req, res) => {
  if (req.params.appendable !== undefined) {
    res.send({
      appended: req.params.appendable + "a"
    });
  } else if (req.params.appendable == undefined) {
    res.status(404);
  }
});

function sum(number) {
  let j = 0;
  for (let i = 0; i <= number; i++) {
    j += i;
  }
  return j;
}

function factor(number) {
  let j = 1;
  for (let i = number; i > 0; i--) {
    j *= i;
  }
  return j;
}

app.post("/dountil/:action", (req, res) => {
  if (req.params.action == "sum") {
    res.send({
      result: sum(req.body.until)
    });
  } else if (req.params.action == "factor") {
    res.send({
      result: factor(req.body.until)
    });
  }
});

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

function multiply(array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};

function double(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

app.post("/arrays", (req, res) => {
  if (req.body.what === "sum") {
    res.send({
      result: sumArray(req.body.numbers)
    });
  } else if (req.body.what === "multiply") {
    res.send({
      result: multiply(req.body.numbers)
    })
  } else if (req.body.what === "double") {
    res.send({
      result: double(req.body.numbers)
    })
  } else if (req.body.what === undefined || req.body.numbers === undefined) {
    res.send({
      error: "Please provide what to do with the numbers!"
    })
  }
});

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));
