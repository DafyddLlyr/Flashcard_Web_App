<template lang="html">
  <div id="nav-bar">
    <h1>{{ possessiveName }} Profile </h1>
    <router-link v-if="selectedUser" to="/" tag="button">Log Out</router-link>
  </div>
</template>

<script>
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


</style>
