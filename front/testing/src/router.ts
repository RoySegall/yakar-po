import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ProductsService from "@/services/ProductsService";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product/:id",
      name: "productView",
      component: () => import("./views/ProductView.vue"),
      beforeEnter: async (to, from, next) => {

        const ps = new ProductsService();
        const product = await ps.getProductById(to['params']['id']);

        if (product == null) {
          next('/');
        }

        next();
      }
    }
  ]
});
