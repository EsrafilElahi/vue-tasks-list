import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: import("../views/HomeView.vue"),
  },
  {
    path: "/add",
    component: import("../views/AddTaskView.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
