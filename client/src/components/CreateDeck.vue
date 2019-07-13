<template lang="html">
  <div id="create-deck">
    <h1>Create New Deck</h1>
    <div id="form-container">

      <div id="name-container">
        <label>Deck Name</label>
        <input type="text" value="Deck Name" v-model="deckName" id="deck-name-input" required>
      </div>

      <div id="card-front" class="card-container">
        <label for="card-front">Card Front</label>
        <textarea name="card-front" v-model="cardFront" class="card" required />
      </div>

      <div id="card-back" class="card-container">
        <label for="card-back">Card Back</label>
        <textarea name="card-back" v-model="cardBack" class="card" required/>
      </div>

<div id="submit-button-container">
<button type="button" id="submit-button">Save</button>
</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'create-deck',
  data() {
    return {
      deckName: '',
      cardFront: '',
      cardBack: '',
    }
  }
}
</script>

<style lang="css" scoped>

#create-deck {
  background-color: lightgrey;
}

.card {
  resize: none;
  text-align: center;
  width: 70%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 20px;
  overflow: auto;
}

#form-container {
  margin: 0 5vw;
  margin-top: 2vw;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 1vw;
  grid-template-rows: auto 15vw 3vw;
  grid-template-areas:
  'deck-name deck-name'
  'front back'
  'confirm confirm';
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#card-front {
  grid-area: front;
}

#card-back {
  grid-area: back;
}

#name-container {
  grid-area: deck-name;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#deck-name-input {
  border: none;
  outline: none;
  border-radius: 20px;
  width: 35vw;
  height: 3vw;
  text-align: center;
}

#submit-button-container {
  grid-area: confirm;
  display: flex;
  justify-content: center;
  align-items: center;
}

#submit-button {
  width: 20vw;
  height: 2vw;
}

</style>
