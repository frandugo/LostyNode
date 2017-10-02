const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards')

app.use(mainRoutes);
app.use('/cards', cardRoutes);


app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!");
});