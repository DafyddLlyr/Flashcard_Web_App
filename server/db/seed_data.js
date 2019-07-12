use flashcarddb;
db.dropDatabase();

db.users.insertMany ([
  { name: "Dafydd" },
  { name: "Katie" },
  { name: "James" }
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
  },
  {
    front: "What is H2O?",
    back: "Water",
    deck: "Chemistry"
  },
  {
    front: "What is H?",
    back: "Hydrogen",
    deck: "Chemistry"
  },
  {
    front: "What is O?",
    back: "Oxygen",
    deck: "Chemistry"
  },
])
