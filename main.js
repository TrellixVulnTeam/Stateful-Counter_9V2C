const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

var clicks = 0;

function increment() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function decrement() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  };


