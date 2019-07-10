<template>
  <div id="app">
    <h1>hello world</h1>
    <p v-for="user in this.users">{{user.name}}</p>
    <p v-for="card in this.flashcards">{{card.front}}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      users: null,
      flashcards: null
    }
  },
  components: {
  },
  mounted() {
    this.fetchUsers();
    this.fetchFlashcards();
  },
  methods: {
    fetchUsers() {
      fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(result => this.users = result)
    },
    fetchFlashcards() {
      fetch('http://localhost:3000/api/flashcards')
      .then(res => res.json())
      .then(result => this.flashcards = result)
    }
  }
}
</script>

<style>

#app {
}

</style>
