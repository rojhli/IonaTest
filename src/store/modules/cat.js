const state = {
  list: [],
  data: {},
  count: 0,
  pageCount: 1,
  currentPageCount: 1
};

const actions = {
  getById({ commit, state }, { id, isPagination = false }) {
    let page = 0;
    let runMutations = response => {
      commit("setCount", parseInt(response.headers["pagination-count"]));
      commit("setPageCount");

      commit("setCatList", response.data);
    };

    if (isPagination) {
      page = state.currentPageCount;

      runMutations = response => {
        commit("incrementCurrentPageCount", 1);
        commit("appendCatList", response.data);
      };
    }

    this._vm.$axios
      .get("images/search", {
        params: {
          page,
          limit: 10,
          breed_ids: id,
          order: "desc"
        }
      })
      .then(response => {
        runMutations(response);
      });
  },

  findCatById({ commit }, id) {
    commit("resetCatDataState");

    this._vm.$axios.get(`images/${id}`).then(response => {
      commit("setCatData", response.data);
    });
  }
};

const mutations = {
  setCatList(state, cats) {
    state.list = cats;
  },

  setCatData(state, cat) {
    state.data = cat;
  },

  resetCatDataState(state) {
    state.data = {};
  },

  appendCatList(state, cats) {
    state.list = state.list.concat(cats);
  },

  setCount(state, count) {
    state.count = count;
  },

  setPageCount(state) {
    state.pageCount = Math.ceil(state.count / 10);
  },

  incrementCurrentPageCount(state, n) {
    state.currentPageCount += n;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
