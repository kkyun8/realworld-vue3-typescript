import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { store } from "@/store";

// TODO: url param & etc
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters["user/isLogin"]) next({ name: "Home" });
      else next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(/* webpackChunkName: "register" */ "../views/Register.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters["user/isLogin"]) next({ name: "Home" });
      else next();
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "article-page" */ "../views/Profile.vue"),
  },
  {
    path: "/article",
    name: "Article",
    component: () => import(/* webpackChunkName: "article-page" */ "../views/Article.vue"),
  },
  {
    path: "/editor",
    name: "Editpr",
    component: () => import(/* webpackChunkName: "register" */ "../views/ArticleEditor.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import(/* webpackChunkName: "register" */ "../views/UserSettings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
