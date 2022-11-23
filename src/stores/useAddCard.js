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
    index: "",
  }),
  actions: {
    fill() {
      this.data = data;
    },
    add() {
      this.data.push({ title: this.title, startDate: this.startDate });
    },
    remove() {
      this.data.splice(this.index, 1);
    },
    close() {
      this.showAddPopup = false;
    },
    open() {
      this.showAddPopup = true;
    },
    openToastMessage(index) {
      this.showToastMessage = true;
      this.index = index;
    },
    closeToastMessage() {
      this.showToastMessage = false;
    },
  },
});
