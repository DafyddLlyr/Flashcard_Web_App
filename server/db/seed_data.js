use flashcarddb;
db.dropDatabase();

db.users.insertMany ([
  {
    name: "Dafydd"
  }
])

db.flashcards.insertMany ([
  {
    front: "What is the capital of Japan?",
    back: "Tokyo",
    deck: "World Capitals"
  },
  {
    front: "What is the capital of Wales?",
    back: "Cardiff",
    deck: "World Capitals"
  },
  {
    front: "What is the capital of Scotland?",
    back: "Edinburgh",
    deck: "World Capitals"
  }
])
