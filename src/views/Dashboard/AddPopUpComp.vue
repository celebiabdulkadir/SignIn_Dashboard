<script setup>
import { ref } from "vue";
const props = defineProps(["showAddPopup"]);

const emits = defineEmits(["close"]);

const title = ref();
const startDate = ref();

const closeHandler = () => {
  emits("close");
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.showAddPopup"
      class="fixed inset-0 bg-gray-200 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <div class="relative top-60 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="modal-container">
          <button @click="closeHandler">
            <div class="close-icon">X</div>
          </button>

          <div class="modal-body">Add Card</div>

          <input type="text" placeholder="title" v-model="title" />
          {{ title }}
          <input type="text" placeholder="start Date" v-model="startDate" />
          {{ startDate }}

          <div class="modal-footer">></div>
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
