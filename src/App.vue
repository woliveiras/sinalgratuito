<template>
  <header>
    <h1>Sinal Gratuito!</h1>
    <p>Internet de graça para que todas as pessoas tenham acesso a informação</p>
    <p>{{ displayName }}</p>
  </header>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  max-width: 43%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    return {
      displayName: computed(() => store.state.user?.data?.displayName),
    }
  }
}
</script>
