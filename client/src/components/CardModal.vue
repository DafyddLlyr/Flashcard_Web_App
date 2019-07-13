<template lang="html">
  <div id="background">
    <div id="card-container">
      <div v-if="!cardPassed" class="card front">
        <h2>Front</h2>
        <h2 v-on:click="guessCard">Guess</h2>
      </div>
      <div v-if="cardPassed" class="card back">
        <h2>Back</h2>
        <h2 v-on:click="nextCard">Next</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-modal',
  data() {
    return {
      cardPassed: false
    }
  },
  methods: {
    guessCard: function() {
      this.cardPassed = true;
    },
    nextCard: function() {
      this.cardPassed = false;
    }
  }
}
</script>

<style lang="css" scoped>

#background {
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

.card-container {
  perspective: 1000px;
}

.card {
  background-color: white;
  width: 40vw;
  height: 80vh;
  border-radius: 20px;
}

</style>
