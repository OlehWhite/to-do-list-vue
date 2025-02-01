import { createRouter, createWebHistory } from "vue-router";
import Todos from "@/pages/Todos.vue";
import Users from "@/pages/Users.vue";
import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/:id/todos",
    component: Todos,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
