import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GamesView from "../views/GamesView.vue";
import PongView from "../views/PongView.vue";
import TetrisView from "../views/TetrisView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Home" },
    },
    {
      path: "/games",
      name: "games",
      component: GamesView,
      meta: { title: "Games" },
    },
    {
      path: "/games/tetris",
      name: "tetris",
      component: TetrisView,
      meta: { title: "Tetris" },
    },
    {
      path: "/games/pong",
      name: "pong",
      component: PongView,
      meta: { title: "Pong" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
      meta: { title: "404" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;

  if (pageTitle === "404") {
    document.title = "404 | Page not found";
  } else if (pageTitle) {
    document.title = `${pageTitle} | Jones Jankovic`;
  } else {
    document.title = "Jones Jankovic";
  }

  next();
});

export default router;
