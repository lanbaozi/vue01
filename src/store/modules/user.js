
const state = {
    loginIn: false, //记录用户登录
}

const mutations = {
    LOGIN_IN: (state, loginIn) => {
        state.loginIn = loginIn
        window.sessionStorage.setItem('loginIn', JSON.stringify(loginIn))
    }
}

const actions = {
    setLoginIn({ commit }, loginIn) {
        commit('LOGIN_IN', loginIn)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
