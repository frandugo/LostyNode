const express = require('express');
const router = express.Router();

const app = express();
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello', (req, res) => {
  res.render('hello', { prompt: "Texto alternativo!", colors });
  console.log("This is Dirname " + __dirname);
});

app.post('/hello', (req, res) => {
	res.json(req.body);
});

module.exports = router;