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
        _saltKey: state => state.saltKey
    },
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
        },
    }),],
});