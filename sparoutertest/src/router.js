import { createWebHistory, createRouter } from "vue-router";
import Muzzi from "./components/Muzzi.vue";
import Dori from "./components/Dori.vue";
import Main from "./components/Main.vue";

const routes = [
  {
    path: "/muzzi",
    component: Muzzi,
  },
  {
    path: "/",
    component: Main,
  },
  {
    path: "/dori",
    component: Dori,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
