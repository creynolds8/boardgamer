const express = require('express');
const app = express();
const port = 8888;

const gameData = require('./public/gameslist');

app.use(express.static(__dirname + '/public'));
app.set("view engine", 'ejs');

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/games', function(req, res) {
  const templateVars = {
    games: gameData.gamesList
  }
  res.render('games', templateVars)
})

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
