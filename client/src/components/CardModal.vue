<template lang="html">
  <div id="background">
    <div id="card-container">
      <div v-if="!cardPassed" class="card front">
        <p>{{ currentCard.front }}</p>
        <button v-on:click="showCard" type="button">Show Answer</button>
      </div>
      <div v-if="cardPassed" class="card back">
        <p>{{ currentCard.back }}</p>
        <div id="button-container">
          <button v-for="level in cardLevels"
          v-on:click="nextCard(level)" type="button">{{ prettyLevel(level) }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-modal',
  props: ['selectedDeck'],
  data() {
    return {
      cardPassed: false,
      cardLevels: ["again", "hard", "good", "easy"]
    }
  },
  methods: {
    showCard: function() {
      this.cardPassed = true;
    },
    nextCard: function(level) {
      this.selectedDeck.cards.new.push(this.currentCard)
      this.selectedDeck.cards.new.splice(0, 1)
      this.cardPassed = false;
    },
    prettyLevel: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    currentCard: function() {
      return this.selectedDeck.cards.new[0]
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

.card {
  background-color: white;
  width: 40vw;
  height: 80vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
