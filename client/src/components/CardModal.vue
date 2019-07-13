<template lang="html">
  <div id="background">
    <div id="card-container">
      <div v-if="!cardPassed && !deckCompleted" class="card front">
        <p>{{ currentCard.front }}</p>
        <button v-on:click="showCard" type="button">Show Answer</button>
      </div>
      <div v-if="cardPassed && !deckCompleted" class="card back">
        <p>{{ currentCard.back }}</p>
        <div id="button-container">
          <button v-for="level in cardLevels"
          v-on:click="nextCard(level)" type="button">{{ prettyLevel(level) }}</button>
        </div>
      </div>
      <div v-if="deckCompleted" class="card completed">
        <h2>Deck completed!</h2>
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
      cardLevels: ["new", "hard", "good", "easy"],
      currentLevel: "new",
      totalCards: 0,
      deckCompleted: false
    }
  },
  methods: {
    showCard: function() {
      this.cardPassed = true;
    },
    nextCard: function(level) {
      this.selectedDeck.cards[level].push(this.currentCard)
      this.selectedDeck.cards[this.currentLevel].splice(0, 1)
      this.assignCurrentLevel()
      this.checkCompletion()
      this.cardPassed = false;
    },
    prettyLevel: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    assignCurrentLevel: function() {
      for (let level in this.selectedDeck.cards) {
        if (this.selectedDeck.cards[level].length !== 0) {
          return this.currentLevel = level
        }
      }
    },
    countCards: function() {
      let numOfCards = 0;
      for (let level of this.cardLevels) {
        numOfCards += this.selectedDeck.cards[level].length
      }
      this.totalCards = numOfCards
    },
    checkCompletion: function() {
      if (this.totalCards === this.selectedDeck.cards.easy.length) {
        this.deckCompleted = true;
      }
    }
  },
  computed: {
    currentCard: function() {
      if (this.currentLevel) {
        return this.selectedDeck.cards[this.currentLevel][0]
      }
    },
  },
  mounted() {
    this.assignCurrentLevel()
    this.countCards()
    this.checkCompletion()
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
