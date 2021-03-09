import { auth } from '@/firebaseUtils'
import router from '../router/index'

export default {
  async login({ dispatch }, formData) {
    const { user } = await auth.signInWithEmailAndPassword(
      formData.email, formData.password
    )
    dispatch('fetchUser', user)
  },
  async signup({ dispatch }, formData) {
    const { user } = await auth.createUserWithEmailAndPassword(
      formData.email, formData.password
    )

    await auth.currentUser.updateProfile({
      displayName: formData.displayName
    })

    dispatch('fetchUser', user)
  },
  async fetchUser({ commit }, user) {
    commit('SET_LOGGED_IN', user !== null)
    
    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email
      })
    } else {
      commit('SET_USER', null)
    }
  }
}