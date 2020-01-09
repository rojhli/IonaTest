import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleCat from "../views/SingleCat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/:catId",
    name: "cat",
    component: SingleCat
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
