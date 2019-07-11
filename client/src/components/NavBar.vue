<template lang="html">
  <div id="nav-bar">
    <h1>{{ possessiveName }} Profile </h1>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: ['selectedUser'],
  computed: {
    possessiveName() {
      let name = this.selectedUser.name
      return name.slice(-1) === 's' ? name + "'" : name +"'s"
    }
  }
}
</script>

<style lang="css" scoped>

#nav-bar {
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: center;
}


</style>
