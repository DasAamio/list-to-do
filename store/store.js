import {OWNER_LOGIN} from "../graphql/auth";
import {SHOW_ALL_PACKAGE} from "../graphql/showAllPackage";

export const state = () => ({
  user: {},
  packages: []
});

export const mutations = {
  SET_USER_DATA: (state, data) => {
    state.user = data;
  },
  SET_ALL_PACKAGE_DATA: (state, data) => {
    state.packages = data
  }
};

export const actions = {
  async requestLogin({ commit }, {email, password, deviceToken}) {
    let response = await this.app.apolloProvider.defaultClient.mutate({mutation:OWNER_LOGIN, variables: {
        email,
        password,
        deviceToken
      }})
    await commit("SET_USER_DATA", response.data.OwnerLogin);
  },
  async showAllPackage({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({query:SHOW_ALL_PACKAGE})
    await commit("SET_ALL_PACKAGE_DATA", response.data.ShowAllPackage)
  },
  callApollo({ commit }) {
    console.log('callApollo called ------>>')
  }
}
