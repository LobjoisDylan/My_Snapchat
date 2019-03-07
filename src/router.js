import Vue from "vue";
import Router from "vue-router";
import Register from "./views/Register.vue";
import Connection from "./views/Connection.vue"
import Home from "./views/Home.vue"
import Index from "./views/Index.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/connection",
      name: "connection",
      component: Connection
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "index",
      component: Index
    }
  ]
});
