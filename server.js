const express = require('express')
const app = express();
const port = 3000;

var clicks = 0;

app.use(express.static('public'));

app.get('/increment', (req, res) => {
    clicks++;
    console.log(req);
  });

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
});
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
