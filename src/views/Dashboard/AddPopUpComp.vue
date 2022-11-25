<script setup>
import { useAddCard } from "@/stores/useAddCard.js";
// import { collection, onSnapshot, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
// import { db } from "@/main";
const store = useAddCard();
store.fill();
// const firebasecol = collection(db, "1");

// onSnapshot(firebasecol, (snapshot) => {
//   snapshot.docs.map((member) => {
//     console.log(member.data());
//   });
// });
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showAddPopup"
      class="fixed inset-0 bg-gray-200 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <div
        class="relative top-60 mx-auto p-5 border w-96 h-96 shadow-lg rounded-md bg-white"
      >
        <div class="modal-container">
          <div class="flex justify-end">
            <button @click="store.close">
              <div class="close-icon">X</div>
            </button>
          </div>
          <div class="flex justify-center bg-slate-200">
            <button @click="store.add">
              <div class="close-icon">ADD</div>
            </button>
          </div>
          <div class="flex justify-center">
            <input type="text" placeholder="title" v-model="store.title" />
          </div>
          <div class="flex justify-center">
            <input type="date" placeholder="start Date" v-model="store.startDate" />
          </div>
          <div class="flex justify-center">
            <input type="text" placeholder="status" v-model="store.status" />
          </div>
          <div class="flex justify-center">
            <input type="number" placeholder="progress" v-model="store.progress" />
          </div>
          <div class="flex justify-center">
            <input type="number" placeholder="task" v-model="store.task" />
          </div>
          <div class="flex justify-center">
            <input type="number" placeholder="user" v-model="store.user" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
.addCard {
  min-width: 450px;
  min-height: 450px;
}
</style>
