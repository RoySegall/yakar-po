import Vue from "vue";
import Router, {Route} from "vue-router";
import Home from "./views/Home.vue";
import ProductsService from "@/services/ProductsService";
import store from "./store";

Vue.use(Router);

const productBeforeEnter = async (to: any, from: any, next: any) => {

  const ps = new ProductsService();
  const product = await ps.getProductById(to['params']['id']);

  if (product == null) {
    next('/');
  }

  next();
};

const router = new Router({
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
      beforeEnter: productBeforeEnter,
    },
    {
      path: "/product/:id/price-explorer",
      name: "priceExplorer",
      component: () => import("./views/PriceExplorer.vue"),
      beforeEnter: productBeforeEnter,
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./views/Cart.vue"),
    },
  ],
});

router.afterEach((to: Route, from: Route) => {
  store.commit('resetSearchResults');
});

export default router;
