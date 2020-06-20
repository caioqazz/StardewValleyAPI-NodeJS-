const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/StardewValley_Test');
} else {
  const db = mongoose.connect(
    'mongodb+srv://stard3wv4lleyuser:t9dpiIzSUFfLg3OB@cluster0-ackzz.gcp.mongodb.net/Test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to database!')
  );
}




const port = process.env.PORT || 3000;

const fishRouter = require('./routes/fishRouter')();
const weaponRouter = require('./routes/weaponRouter')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use('/public/images', express.static(path.join(__dirname, 'image')))
app.use('/api', fishRouter);
app.use('/api', weaponRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
