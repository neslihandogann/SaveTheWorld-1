import { createStore } from "vuex"


export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        logOut(state) {
            state.user = null
        },
    },
    getters: {
        _isAuthenticated: state => state.user != null,
        _currentUser(state) {
            const user = state.user
            return user
        },
    },
});