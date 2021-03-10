import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

export default createStore({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        accessPoints: []
    },
    getters: {
      user(state){
        return state.user
      },
      accessPoints(state) {
        return state.accessPoints
      }
    },
    actions,
    mutations
})