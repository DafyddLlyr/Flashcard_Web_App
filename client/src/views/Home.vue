<template lang="html">
  <div id="home">
    <h1>Welcome to FlashCards</h1>
    <select v-model="selectedUser">
      <option value="">Select a user</option>
      <option v-for="user in users" :value="user">{{user.name}}</option>
    </select>
  <router-link :to="{ name: 'profile', params: {selectedUser: selectedUser} }" tag="button">Login</router-link>
  </div>
</template>

<script>
export default {
  name: name,
  data() {
    return {
      users: null,
      selectedUser: null
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(result => this.users = result)
    },
    loadProfile() {
      if (this.selectedUser) {
        console.log(this.selectedUser);
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
