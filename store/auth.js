export const state = () => ({
    isAuthenticated: false,
    displayName: "",
    email: ""
})


export const mutations = {
    SET_USER_DATA: (state, {isAuthenticated, displayName, email}) => {
        state.isAuthenticated = isAuthenticated
        state.displayName = displayName
        state.email = email
    },
    LOGOUT_USER: (state) => {
        state.isAuthenticated = false;
        state.displayName = ""
        state.email = ""
    },
}

export const actions = {
    performLogoutUser: async ({ commit }) => {
        await commit('LOGOUT_USER')
    },
}