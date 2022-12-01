import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: () => import("../views/SignIn.vue"),
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard/DashBoard.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: "Projects",
          path: "Projects",
          component: () => import("@/components/dashboard/Card/CardComp.vue"),
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: "Modules",
          path: "Modules",
          component: () => import("../views/Dashboard/Modules.vue"),
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: "Sprint",
          path: "Sprint",
          component: () => import("../views/Dashboard/Sprint.vue"),
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: "Members",
          path: "Members",
          component: () => import("../views/Dashboard/Members.vue"),
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          name: "Reports",
          path: "Reports",
          component: () => import("../views/Dashboard/Reports.vue"),
        },
      ],
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
