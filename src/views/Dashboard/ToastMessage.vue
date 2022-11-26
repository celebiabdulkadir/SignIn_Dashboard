<script setup>
import { useAddCard } from "@/stores/useAddCard.js";
const store = useAddCard();
store.fill();
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showToastMessage"
      class="fixed inset-0 bg-gray-200 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <div
        class="relative top-60 mx-auto p-5 border w-96 h-96 shadow-lg rounded-md bg-white"
      >
        <div>
          <div class="flex justify-end">
            <button @click="store.closeToastMessage">
              <div class="close-icon">X</div>
            </button>
          </div>
          <div class="mb-2 text-sm font-normal">
            <div class="flex justify-center">ARE YOU SURE ?</div>
            <div class="grid grid-cols-2 gap-2">
              <div
                class="cursor-pointer inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                <button @click="store.remove(store.id)">
                  <div @click="store.closeToastMessage" class="close-icon">YES</div>
                </button>
              </div>
              <div
                class="cursor-pointer inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                <button @click="store.closeToastMessage">
                  <div>NO</div>
                </button>
              </div>

              <div>{{ store.id }}</div>
            </div>
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
