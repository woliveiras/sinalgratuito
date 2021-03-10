export default {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
    },
    SET_ACCESS_POINTS(state, data) {
      state.accessPoints = data
    }
}
