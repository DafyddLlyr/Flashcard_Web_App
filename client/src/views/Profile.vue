<template lang="html">
  <div id="profile">
    <nav-bar :selectedUser="selectedUser" />
    <div id="main">
      <p>This is the main pane</p>
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

</style>
