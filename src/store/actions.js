import { uuid } from 'vue-uuid'

import { auth, accessPointsCollection } from '@/firebaseUtils'
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
  },
  async fetchAccessPoints({ state, commit }) {
    const accessPoints = 
          await accessPointsCollection
            .orderBy("createdOn")
            .limit(10)
            .get()
            .then((querySnapshot) => {
              return querySnapshot.docs.map(doc => doc.data())
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
    
    commit('SET_ACCESS_POINTS', accessPoints)
  },
  async createAcessPoint({ state, commit }, accessPoint) {
    await accessPointsCollection.add({
      createdOn: new Date(),
      id: uuid.v1(),
      name: state.accessPoint.name,
      createBy: state.userProfile.name,
      address: state.accessPoint.address
    })
  },
}