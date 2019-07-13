<template lang="html">
  <div id="nav-bar">
    <h1>{{ possessiveName }} Profile </h1>

    <div v-on:click="handleViewProfile" class="nav-option">
      <h2><i class="fas fa-user-circle"></i> Profile</h2>
    </div>

    <div v-on:click="handleNewDeck" class="nav-option">
      <h2><i class="fas fa-plus-circle"></i> New Deck</h2>
    </div>

    <router-link v-if="selectedUser" to="/" tag="button">Log Out</router-link>

  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "nav-bar",
  props: ['selectedUser'],
  computed: {
    possessiveName() {
      if (this.selectedUser) {
        let name = this.selectedUser.name
        return name.slice(-1) === 's' ? name + "'" : name +"'s"
      }
    }
  },
  methods: {
    handleNewDeck: function() {
      eventBus.$emit('create-deck')
    },
    handleViewProfile: function() {
      eventBus.$emit('view-profile')
    }
  }
}
</script>

<style lang="css" scoped>

#nav-bar {
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.nav-option {
  cursor: pointer;
  width: 90%;
  text-align: center;
}

</style>
