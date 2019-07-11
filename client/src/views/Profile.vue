<template lang="html">
<h1>PROFILE!!</h1>
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
  }
}
</script>

<style lang="css" scoped>
</style>
