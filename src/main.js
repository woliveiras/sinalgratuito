import { createApp } from 'vue'
import { createStore } from 'vuex'

import 'es6-promise/auto'

import App from './App.vue'
import router from './router'
import { auth } from './firebaseUtils'
import store from './store/index'

let mounted = false

auth.onAuthStateChanged(user => {
    store.dispatch('fetchUser', user)
    if (!mounted) {
        createApp(App)
            .use(router)
            .use(store)
            .mount('#app')
        mounted =  true
    }
})
