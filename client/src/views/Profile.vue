<template lang="html">
  <div id="profile-container">
    <card-modal v-if="selectedDeck" :selectedDeck="selectedDeck"/>
    <div id="profile">
      <nav-bar :selectedUser="selectedUser" />
      <div id="main">
        <div>
          <h2>User greeting</h2>
        </div>
        <div>
          <h2>Stats overview</h2>
        </div>
        <div id="deck-container">
          <h2>Decks</h2>
          <div v-for="deck in decks" class="deck">
            <h3 v-on:click="chooseDeck(deck)">{{ deck.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import CardModal from '../components/CardModal.vue'
import { eventBus } from '../main.js'

export default {
  name: 'profile',
  props: [ 'selectedUser' ],
  data() {
    return {
      decks: null,
      selectedDeck: null
    }
  },
  mounted() {
    this.fetchFlashcards();
    if (this.selectedUser === undefined) { this.$router.push('/') }
    eventBus.$on('quit-deck', () => this.selectedDeck = null)
  },
  methods: {
    fetchFlashcards() {
      fetch('http://localhost:3000/api/decks')
      .then(res => res.json())
      .then(result => this.decks = result)
    },
    chooseDeck(deck) {
      this.selectedDeck = deck;
    }
  },
  components: {
    'nav-bar': NavBar,
    'card-modal': CardModal
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
  background-color: white;
}

#deck-container {
  grid-area: decks;
}

</style>
