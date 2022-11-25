import { defineStore } from "pinia";
import { ref } from "vue";
import {
  collection,
  onSnapshot,
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
} from "firebase/firestore";
import { db } from "@/main";

const data = ref();
const projectsCollection = collection(db, "Projects");

const deleteObj = async (id) => {
  await deleteDoc(doc(db, "Projects", `${id}`));
};

onSnapshot(projectsCollection, (querySnapshot) => {
  const rawData = [];
  querySnapshot.forEach((doc) => {
    const cardData = { ...doc.data(), id: doc.id };
    rawData.push(cardData);
  });
  data.value = rawData;
});

// console.log(cities.value);

// console.log(unsubscribe);
console.log(data);
export const useAddCard = defineStore("addCard", {
  state: () => ({
    data: [],
    showAddPopup: false,
    showToastMessage: false,
    showEditToastMessage: false,
    title: "",
    status: "",
    startDate: "",
    id: "",
    progress: "",
    task: "",
    user: "",
    membersPictures: [],
  }),
  actions: {
    fill() {
      this.data = data;
    },
    // getId() {
    //   allId.filter((id) => {
    //     id === this.id;
    //   });
    // },
    add() {
      addDoc(projectsCollection, {
        status: this.status,
        title: this.title,
        startDate: this.startDate,
        progress: this.progress,
        task: this.task,
        user: this.user,
        membersPictures: this.membersPictures,
      });
    },
    remove(id) {
      deleteObj(this.id);
    },
    close() {
      this.showAddPopup = false;
    },
    open() {
      this.showAddPopup = true;
      this.resetBeforeAdd();
    },
    openToastMessage(id) {
      this.showToastMessage = true;
      this.id = id;

      //   this.id = this.getId();
    },

    closeToastMessage() {
      this.showToastMessage = false;
    },
    openEditToastMessage(id) {
      this.showEditToastMessage = true;
      this.id = id;
      //   this.resetBeforeEdit();
      //   this.resetBeforeEdit();
      //   this.title = this.data[this.id].title;
      //   this.data[this.id].status = this.status;
      //   this.data[this.id].startDate = this.startDate;
      //   this.data[this.id].progress = this.progress;
      //   this.resetBeforeEdit();
    },
    closeEditToastMessage() {
      this.showEditToastMessage = false;
    },
    resetBeforeAdd() {
      this.title = "";
      this.status = "";
      this.startDate = "";
      this.progress = 0;

      (this.task = ""), (this.user = ""), (this.membersPictures = []);
    },
    resetBeforeEdit() {
      this.title = title;
      this.status = status;
      startDate = this.startDate;
      progress = this.progress;
      task = this.task;
      user = this.user;
      membersPictures = this.membersPictures;
    },
    async edit(id) {
      await setDoc(doc(db, "Projects", `${id}`), {
        title: this.title,
        status: this.status,
        startDate: this.startDate,
        progress: this.progress,
        task: this.task,
        user: this.user,
        membersPictures: this.membersPictures,
      });
    },
  },
});
