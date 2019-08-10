import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () =>
        import(/* webpackChunkName: "signin" */ "./views/Signin.vue"),
    },
    {
      path: "/jobs/add",
      name: "addjobs",
      component: () => import("./views/Addjobs.vue"),
    },
    {
      path: "/jobs",
      name: "getjobs",
      component: () => import("./views/Getjobs.vue"),
    },
    {
      path: "/conferences",
      name: "getConffilter",
      component: () => import("./views/getConf.vue"),
    },
    {
      path: "/conference/add",
      name: "addconference",
      component: () => import("./views/Addconference.vue"),
    },
    {
      path: "/city/:cityName",
      name: "CityDetails",
      component: () => import("./views/CityDetails.vue"),
    },
    {
      path: "/city",
      name: "CitySearch",
      component: () => import("./views/CitySearch.vue"),
    },
  ],
});
