import { createRouter, createWebHashHistory } from "vue-router";
import HomePosts from "../views/HomePosts.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePosts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
