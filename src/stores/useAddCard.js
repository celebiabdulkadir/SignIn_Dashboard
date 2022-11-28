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

const data = ref([]);
const projectsCollection = collection(db, "Projects");

const deleteObj = async (id) => {
  await deleteDoc(doc(db, "Projects", `${id}`));
};

onSnapshot(projectsCollection, (querySnapshot) => {
  const rawData = [];
  console.log(rawData);
  querySnapshot.forEach((doc) => {
    const cardData = { ...doc.data(), id: doc.id };
    rawData.push(cardData);
  });
  data.value = rawData;
});

console.log(data.value);
export const useAddCard = defineStore("addCard", {
  state: () => ({
    data: [],
    filteredData: [],
    sideBarStatus: false,
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
      this.filteredData = data;
    },
    sideBarChange() {
      console.log(this.sideBarStatus);
      this.sideBarStatus = !this.sideBarStatus;
    },
    filterData(selectedTab) {
      this.selectedTab = selectedTab;
    },
    filterDataFunc(selectedTab) {
      if (this.selectedTab === "All") {
        return (this.filteredData = data);
      }
      //   console.log(this.data.filter((item) => item.status === selectedTab));
      const filtered = Array.from(this.data).filter(
        (item) => item.status === this.selectedTab
      );
      console.log(filtered);
      return (this.filteredData = filtered);
    },
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
    async remove(id) {
      await deleteObj(this.id);
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
    },

    closeToastMessage() {
      this.showToastMessage = false;
    },
    openEditToastMessage(id) {
      this.showEditToastMessage = true;
      this.id = id;
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
