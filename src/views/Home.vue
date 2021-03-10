<template>
  <div class="home">
    <button @click="logout">Sair</button>
  </div>
  <main>
    <ul>
      <li v-for="(accessPoint, index) in accessPoints" v-bind:key="index">
        <div>
          <p><strong>Local: </strong>{{ accessPoint.name }}</p>
          <p><strong>Endereço: </strong>{{ accessPoint.address }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { auth } from '@/firebaseUtils'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    store.dispatch('fetchAccessPoints')

    return {
      accessPoints: computed(() => store.getters.accessPoints),
    }
  },
  methods: {
    logout: function() { auth.signOut().then(
      this.$router.replace('login')
    )}
  }
}
</script>
