import router from "@/router";
import { defineStore } from "pinia";

export const currentRouteNameChange = defineStore("currentRouteFinder", {
  state: () => ({}),
  getters: {
    currentRouteName: () => {
      return router.currentRoute.value.name;
    },
  },
});
