<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="logout">Sair</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Home',
  methods: {
    logout: function() { firebase.auth().signOut().then(
      this.$router.replace('login')
    )}
  }
}
</script>
