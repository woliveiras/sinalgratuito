import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

export default createStore({
    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
      user(state){
        return state.user
      }
    },
    actions,
    mutations
})