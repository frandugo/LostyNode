const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
const colors = [
	'red',
	'orange',
	'yellow',
	'blue',
	'purple'
]

app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Texto alternativo!", colors });
});

app.get('/hello', (req, res) => {
  res.render('hello', { prompt: "Texto alternativo!", colors });
  console.log("This is Dirname " + __dirname);
});

app.post('/hello', (req, res) => {
	res.json(req.body);
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});