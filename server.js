const express = require('express')
const sqlite = require('sqlite3').verbose()

const app = express();
const port = 3000;


var clicks;


let db = new sqlite.Database('./count.db')

db.get("SELECT number_of_clicks FROM clicks", (error, row) => {
    clicks = row.number_of_clicks;
});


app.use(express.static('public'));


app.get('/increment', (req, res) => {
    clicks++;
    console.log("request to increment", clicks)
    res.send({'clicks':clicks});

    db.run('UPDATE clicks SET number_of_clicks = ?',clicks);

  });

app.get('/decrement', (req, res) => {
    clicks--;
    console.log("request to decrement", clicks)
    res.send({'clicks':clicks});

    db.run('UPDATE clicks SET number_of_clicks = ?',clicks);

  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });