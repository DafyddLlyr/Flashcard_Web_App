<template lang="html">
  <div id="profile">
    <div id="nav-bar">
      <h1>{{possessiveName}} Profile</h1>
    </div>
    <div id="main">
      <p>This is the main pane</p>
    </div>
  </div>
</template>

<script>
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
  computed: {
    possessiveName() {
      let name = this.selectedUser.name
      return name.slice(-1) === 's' ? name + "'" : name +"'s"
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

#nav-bar {
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: center;
}

#main {
  background-color: lightgrey;
}

</style>
