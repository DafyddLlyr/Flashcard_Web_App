use flashcarddb;
db.dropDatabase();

db.users.insertMany ([
  { name: "Dafydd" },
  // { name: "Katie" },
  // { name: "James" }
])

db.decks.insertMany ([
  {
    name: "World Capitals",
    cards: {
      new: [
        {
          front: "What is the capital of Japan?",
          back: "Tokyo"
        },
        {
          front: "What is the capital of Wales?",
          back: "Cardiff"
        },
        {
          front: "What is the capital of Scotland?",
          back: "Edinburgh"
        }
      ],
      hard: [],
      good: [],
      easy: []
    }
  },
  {
    name: "Chemistry",
    cards: {
      new: [
        {
          front: "What is H2O?",
          back: "Water"
        },
        {
          front: "What is H?",
          back: "Hydrogen"
        },
        {
          front: "What is O?",
          back: "Oxygen"
        },
      ],
      hard: [],
      good: [],
      easy: []
    }
  }
])
