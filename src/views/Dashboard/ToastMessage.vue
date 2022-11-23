<script setup>
import { ref } from "vue";
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
          <div class="">
            <div class="flex justify-center">ARE YOU SURE ?</div>

            <div class="flex justify-center">
              <button @click="store.remove(store.index, 1)">
                {{ store.index }}
                <div @click="store.closeToastMessage" class="close-icon">YES</div>
              </button>
            </div>
            <div class="flex flex-row justify-center">
              <button @click="store.closeToastMessage">
                <div>NO</div>
              </button>
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
