<script setup>
import { useAddCard } from "@/stores/useAddCard.js";
const store = useAddCard();
store.fill();
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showEditToastMessage"
      class="fixed inset-0 bg-gray-200 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <div
        class="relative top-60 mx-auto p-5 border w-96 h-96 shadow-lg rounded-md bg-white"
      >
        <div class="modal-container">
          <div class="flex justify-end">
            <button @click="store.closeEditToastMessage">
              <div class="close-icon">X</div>
            </button>
          </div>
          <div class="flex justify-center bg-slate-200">
            <button @click="store.edit(store.index)">
              <div class="close-icon">EDIT</div>
            </button>
          </div>
          <div class="flex justify-center">
            <input type="text" placeholder="title" v-model="store.title" />
          </div>
          <div class="flex justify-center">
            <input type="text" placeholder="start Date" v-model="store.startDate" />
          </div>
          <div class="flex justify-center">
            <input type="text" placeholder="status" v-model="store.status" />
          </div>
          <div class="flex justify-center">
            <input type="text" placeholder="proogress" v-model="store.progress" />
          </div>
          <div>
            <p>Edited</p>
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
