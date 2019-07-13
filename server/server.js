const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then(client => {
  const db = client.db('flashcarddb');

  const usersCollection = db.collection('users');
  const usersRouter = createRouter(usersCollection)
  app.use('/api/users', usersRouter);

  const decksCollection = db.collection('decks');
  const decksRouter = createRouter(decksCollection)
  app.use('/api/decks', decksRouter);
})
.catch(console.error);

app.listen(3000, function() {
  console.log(`Flashcard server running on port ${this.address().port}`);
})
