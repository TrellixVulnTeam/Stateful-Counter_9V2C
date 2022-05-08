const express = require('express')
const app = express();
const port = 3000;

var clicks = 0;

app.use(express.static('public'));

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
});
*/

app.get('/increment', (req, res) => {
    clicks++;
    console.log("request to increment", clicks)
    res.send({'clicks':clicks});
  });

app.get('/decrement', (req, res) => {
    clicks--;
    console.log("request to decrement", clicks)
    res.send({'clicks':clicks});
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });