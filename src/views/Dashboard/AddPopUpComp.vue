<script setup>
import { ref } from "vue";
import { useAddCard } from "@/stores/useAddCard.js";
const store = useAddCard();
store.fill();
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
          <div justify-end>
            <button @click="store.close">
              <div class="close-icon">X</div>
            </button>
          </div>
          <div>
            <button @click="store.add">
              <div class="close-icon">ADD</div>
            </button>
          </div>
          <div>
            <input type="text" placeholder="title" v-model="store.title" />
          </div>
          <div>
            <input type="text" placeholder="start Date" v-model="store.startDate" />
          </div>
          <div>
            <input type="text" placeholder="status" v-model="store.status" />
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
