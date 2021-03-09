<template>
  <div class="home">
    <button @click="logout">Sair</button>
  </div>
</template>

<script>
import { auth } from '@/firebaseUtils'

export default {
  name: 'Home',
  methods: {
    logout: function() { auth.signOut().then(
      this.$router.replace('login')
    )}
  }
}
</script>
