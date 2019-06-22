import Vue from "vue";
import Vuex from "vuex";
import SearchStore from "@/Store/SearchStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search: SearchStore,
  },
});
