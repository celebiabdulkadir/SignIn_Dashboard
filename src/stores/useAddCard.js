import { defineStore } from "pinia";
import data from "@/assets/data/data.json";

export const useAddCard = defineStore("addCard", {
  state: () => ({
    data: [],
    showAddPopup: false,
    showToastMessage: false,
    title: "",
    status: "",
    startDate: "",
  }),
  actions: {
    fill() {
      this.data = data;
    },
    add() {
      this.data.push({ title: this.title, startDate: this.startDate });
    },
    remove(index) {
      this.data.splice(index, 1);
    },
    close() {
      this.showAddPopup = false;
    },
    open() {
      this.showAddPopup = true;
    },
    openToastMessage() {
      this.showToastMessage = true;
    },
    closeToastMessage() {
      this.showToastMessage = false;
    },
  },
});
