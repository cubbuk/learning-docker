const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello Mehmet!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/docker", (req, res) => {
  res.send("hello from docker");
});

app.get('/nodemon', (req, res) => res.send('hello from nodemon'))

app.get('/nodemon2', (req, res) => res.send('hello from nodemon2'))

