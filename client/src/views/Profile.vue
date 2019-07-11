<template lang="html">
  <div id="profile">
    <nav-bar :selectedUser="selectedUser" />
    <div id="main">
      <p>This is the main pane</p>
      <h2>Decks</h2>
      <div v-for="deck in uniqueDecks" class="deck">
      <h3>{{ deck }}</h3>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'profile',
  props: [ 'selectedUser' ],
  data() {
    return {
      flashcards: null
    }
  },
  mounted() {
    this.fetchFlashcards();
    if (this.selectedUser === undefined) { this.$router.push('/') }
  },
  methods: {
    fetchFlashcards() {
      fetch('http://localhost:3000/api/flashcards')
      .then(res => res.json())
      .then(result => this.flashcards = result)
    }
  },
  components: {
    'nav-bar': NavBar
  },
  computed: {
    uniqueDecks() {
      if (this.flashcards) {
        const result = []
        for (let card of this.flashcards) {
          result.push(card.deck)
        }
        return [...new Set(result)]
      }
    }
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
}

.deck {
  background-color: white;
  width: 20vw;
}

</style>
