<template lang="html">
  <div id="profile-container">
    <card-modal v-if="selectedDeck" :selectedDeck="selectedDeck"/>
    <div id="profile">
      <nav-bar :selectedUser="selectedUser" />
      <div v-if="!deckCreation" id="main">
        <div>
          <h2>User greeting</h2>
        </div>
        <div>
          <h2>Stats overview</h2>
        </div>
        <div id="deck-container">
          <h2>Decks</h2>
          <div v-for="deck in decks" class="deck">
            <h3 v-on:click="chooseDeck(deck)" class="deck-title">{{ deck.name }}</h3>
            <i v-on:click="handleResetDeck(deck)"class="fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
      <create-deck v-if="deckCreation" />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CardModal from '../components/CardModal.vue'
import CreateDeck from '../components/CreateDeck.vue'
import { eventBus } from '../main.js'
import DeckService from '../services/DeckService.js'

export default {
  name: 'profile',
  props: [ 'selectedUser' ],
  data() {
    return {
      decks: null,
      selectedDeck: null,
      deckCreation: null
    }
  },
  mounted() {
    this.fetchFlashcards();
    if (this.selectedUser === undefined) { this.$router.push('/') }
    eventBus.$on('quit-deck', () => this.selectedDeck = null)
    eventBus.$on('reset-deck', (deck) => this.handleResetDeck(deck))
    eventBus.$on('create-deck', () => this.deckCreation = true)
    eventBus.$on('view-profile', () => this.deckCreation = false)
  },
  methods: {
    fetchFlashcards() {
      DeckService.getDecks()
      .then(result => this.decks = result)
    },
    chooseDeck(deck) {
      this.selectedDeck = deck;
    },
    handleResetDeck(deck) {
      deck.cards.new = [
        ...deck.cards.new,
        ...deck.cards.easy,
        ...deck.cards.good,
        ...deck.cards.hard
      ]
      deck.cards.easy = [];
      deck.cards.good = [];
      deck.cards.hard = [];
      DeckService.updateDeck(deck._id, {cards: deck.cards})
    }
  },
  components: {
    'nav-bar': NavBar,
    'card-modal': CardModal,
    'create-deck': CreateDeck
  }
}
</script>

<style lang="css" scoped>

#profile {
  display: grid;
  grid-template-columns: 25vw auto;
  height: 100vh;
}

#main {
  background-color: lightgrey;
  display: grid;
  grid-template-rows: 40vh auto;
  grid-template-columns: 40vw auto;
  grid-template-areas:
    'greet stats'
    'decks decks'
}

.deck {
  display: flex;
  margin: 1vw;
  align-items: center;
  justify-content: space-between;
}

#deck-container {
  grid-area: decks;
}

.deck-title {
  background-color: white;
  height: 100%;
  width: 100%;
  height: 4vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 2vw;
}

.fa-sync-alt {
  background-color: white;
  cursor: pointer;
  height: 4vw;
  width: 4.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
