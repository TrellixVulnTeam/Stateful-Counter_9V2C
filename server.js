const express = require('express')
//const sqlite = require('sqlite3').verbose()

const app = express();
const port = 3000;

var fs = require('fs');

var clicks;

fs.readFile('count.txt', 'utf8', function(err, data) {
    if (err) throw err;
    clicks = parseInt(data);
});
//let db = new sqlite.Database('./count.db')

//db.run('INSERT into clicks(number_of_clicks)values(clicks)')
app.use(express.static('public'));


app.get('/increment', (req, res) => {
    clicks++;
    console.log("request to increment", clicks)
    res.send({'clicks':clicks});

    fs.writeFile("count.txt", clicks.toString(),'utf8', function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
  });

app.get('/decrement', (req, res) => {
    clicks--;
    console.log("request to decrement", clicks)
    res.send({'clicks':clicks});

    fs.writeFile("count.txt", clicks.toString(), 'utf8', function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });