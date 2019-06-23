import Vue from "vue";
import Vuex from "vuex";
import SearchStore from "@/Store/SearchStore";
import CartStore from "@/Store/CartStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search: SearchStore,
    cart: CartStore,
  },
});
