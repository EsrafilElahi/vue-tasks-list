import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/add",
    name: "AddTask",
    component: () => import("../views/AddTaskView.vue"),
  },
  {
    path: "/:id",
    children: [
      {
        name: "EditTask",
        path: "edit",
        component: () => import("../views/EditTaskView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
