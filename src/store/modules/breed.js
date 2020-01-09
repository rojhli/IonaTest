const state = {
  all: []
};

const actions = {
  getAll({ commit }) {
    this._vm.$axios.get("breeds").then(response => {
      commit("setBreedList", response.data);
    });
  }
};

const mutations = {
  setBreedList(state, breeds) {
    state.all = breeds;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
