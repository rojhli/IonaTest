import Vue from "vue";
import Vuex from "vuex";
import breed from "./modules/breed";
import cat from "./modules/cat";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    breed,
    cat
  }
});
