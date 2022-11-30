<script setup>
import { useAddCard } from "@/stores/useAddCard.js";
const store = useAddCard();
store.fill();
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showToastMessage"
      class="fixed inset-0 bg-gray-600 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <div
        class="relative top-60 mx-auto p-5 border w-fit h-fit shadow-lg rounded-md bg-white"
      >
        <div>
          <div class="mb-2 text-sm font-normal">
            <div class="flex justify-center">ARE YOU SURE ?</div>
            <div class="grid grid-cols-2 gap-2">
              <div
                class="cursor-pointer inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <button @click="store.remove(store.id)">
                  <div @click="store.closeToastMessage" class="close-icon">YES</div>
                </button>
              </div>
              <div
                class="cursor-pointer inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <button @click="store.closeToastMessage">
                  <div>NO</div>
                </button>
              </div>
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
