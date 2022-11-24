import { defineStore } from "pinia";
import data from "@/assets/data/data.json";

export const useAddCard = defineStore("addCard", {
  state: () => ({
    data: [],
    showAddPopup: false,
    showToastMessage: false,
    showEditToastMessage: false,
    title: "",
    status: "",
    startDate: "",
    index: "",
    progress: 0,
  }),
  actions: {
    fill() {
      this.data = data;
    },
    add() {
      this.data.push({
        title: this.title,
        startDate: this.startDate,
        status: this.status,
        progress: this.progress,
      });
    },
    remove() {
      this.data.splice(this.index, 1);
    },
    close() {
      this.showAddPopup = false;
    },
    open() {
      this.showAddPopup = true;
      this.resetBeforeAdd();
    },
    openToastMessage(index) {
      this.showToastMessage = true;
      this.index = index;
    },
    closeToastMessage() {
      this.showToastMessage = false;
    },
    openEditToastMessage(index) {
      this.showEditToastMessage = true;
      this.index = index;
      this.resetBeforeEdit();
    },
    closeEditToastMessage() {
      this.showEditToastMessage = false;
    },
    resetBeforeAdd() {
      this.title = "";
      this.status = "";
      this.startDate = "";
      this.progress = "";
    },
    resetBeforeEdit() {
      this.title = this.data[this.index].title;
      this.status = this.data[this.index].status;
      this.startDate = this.data[this.index].startDate;
      this.progress = this.data[this.index].progress;
    },
    edit(index) {
      this.data[this.index].title = this.title;
      this.data[this.index].status = this.status;
      this.data[this.index].startDate = this.startDate;
      this.data[this.index].progress = this.progress;
      this.index = index;
    },
  },
});
