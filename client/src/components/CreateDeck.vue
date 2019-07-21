<template lang="html">
  <div id="create-deck">
    <h1>Create New Deck</h1>
    <div id="form-container">

      <div id="deck-name-modal" v-if="!deckNameSelected">
        <div id="name-container">
          <input type="text" value="Deck Name" v-model="deckName" id="deck-name-input" placeholder="New deck name" required>
          <button type="button" id="submit-button" v-on:click="turnOffModal">Create Deck</button>
        </div>
      </div>

      <h2 id="deck-name-title">{{ deckName }}</h2>

      <div id="card-front" class="card-container">
        <label for="card-front">Card Front</label>
        <textarea name="card-front" v-model="cardFront" class="card" required />
      </div>

      <div id="card-back" class="card-container">
        <label for="card-back">Card Back</label>
        <textarea name="card-back" v-model="cardBack" class="card" required/>
      </div>

      <div id="submit-button-container">
        <button type="button" id="submit-button" v-on:click="handleCardCreation">Save Card</button>
      </div>

      <div id="submit-button-container">
        <button type="button" id="submit-button" v-on:click="handleDeckCreation">Save Deck</button>
      </div>

    </div>
    <div class="table">
      <table>
        <tr>
          <th>#</th>
          <th>Question</th>
        </tr>
        <tr v-for="card in newCards">
          <td class="number-column">{{ newCards.indexOf(card) + 1 }}</td>
          <td class="quesion-column">{{ card.front }}</td>
          <td class="admin-column">Edit</td>
          <td class="admin-column">Delete</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import DeckService from '../services/DeckService'
export default {
  name: 'create-deck',
  data() {
    return {
      deckNameSelected: false,
      deckName: '',
      deckID: null,
      cardFront: '',
      cardBack: '',
      newCards: [],
    }
  },
  methods: {
    turnOffModal: function() {
      // TODO: Check unique deck name
      // TODO: Check deck has a name
      const payload = {
        name: this.deckName
      }
      DeckService.postDeck(payload)
      .then(() => fetch('http://localhost:3000/api/decks/'))
      .then(res => res.json())
      .then(decks => decks.filter(deck => deck.name === this.deckName))
      .then(deck => this.deckID = deck[0]._id);
      this.deckNameSelected = true;
    },
    handleCardCreation: function() {
      this.newCards.push({front: this.cardFront, back: this.cardBack})
      DeckService.updateDeck(this.deckID, {
        cards: {
          new: this.newCards,
          hard: [],
          good: [],
          easy: []
        }
      })
      .then(() => {
        this.cardFront = '',
        this.cardBack = ''
      })
    },
    handleDeckCreation: function() {
      console.log("Deck added to db");
    },
  }
}
</script>

<style lang="css" scoped>

#deck-name-modal {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#deck-name-title {
  height: 4vh;
}

#create-deck {
  background-color: lightgrey;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: auto auto;
  grid-template-areas:
  'title table'
  'form table'
}

.card {
  resize: none;
  text-align: center;
  width: 100%;
  height: 25vh;
  outline: none;
  border: none;
  border-radius: 20px;
  overflow: auto;
}

#form-container {
  grid-area: form;
  padding: 0 2vw;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#name-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#deck-name-input {
  border: none;
  outline: none;
  border-radius: 20px;
  width: 100%;
  height: 3vw;
  text-align: center;
}

#submit-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#submit-button {
  width: 20vw;
  height: 2vw;
}

.table {
  grid-area: table;
}

table {
  width: 100%;
  background-color: white;
}

.admin-column {
  width: 5vw;
}

</style>
