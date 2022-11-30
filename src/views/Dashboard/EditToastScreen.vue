<script setup>
import { computed } from "vue";
import { useAddCard } from "@/stores/useAddCard.js";
import ButtonComp from "../../components/ButtonComp.vue";
const store = useAddCard();
store.fill();

const isFormValid = computed(() => {
  if (store.title && store.status && store.startDate != "") {
    return true;
  } else false;
});

const isTitleValid = computed(() => {
  if (store.title != "") {
    return true;
  } else false;
});

const isStatusValid = computed(() => {
  if (store.status != "") {
    return true;
  } else false;
});

const isStartDateValid = computed(() => {
  if (store.startDate != "") {
    return true;
  } else false;
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showEditToastMessage"
      class="fixed inset-0 bg-gray-600 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <div
        class="relative top-40 mx-auto p-5 border w-96 h-fit shadow-lg rounded-md bg-white sm:top-0 sm:w-full sm:h-full"
      >
        <div class="modal-container">
          <div>
            <p><small>Title</small></p>
          </div>
          <div class="flex justify-center">
            <input
              type="text"
              placeholder="title"
              v-model="store.title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
            />
          </div>
          <div v-if="!isTitleValid" class="flex justify-start text-red-200">
            * Please enter a valid title
          </div>
          <div>
            <p><small>Start Date</small></p>
          </div>
          <div>
            <input
              type="date"
              placeholder="start Date"
              v-model="store.startDate"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
            />
          </div>
          <div v-if="!isStartDateValid" class="flex justify-start text-red-200">
            * Please enter a valid date
          </div>
          <div>
            <p><small>Status</small></p>
          </div>
          <div class="block text-sm font-medium w-full text-gray-900 dark:text-white">
            <select
              v-model="store.status"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
            >
              <option value="" disabled selected>Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
          <div v-if="!isStatusValid" class="flex justify-start text-red-200">
            * Please enter a status
          </div>
          <!-- <div>
            <p><small>Progress</small></p>
          </div>
          <div class="flex justify-center">
            <input
              type="number"
              placeholder="progress"
              v-model="store.progress"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
            />
          </div>
          <div>
            <p><small>Task</small></p>
          </div>
          <div class="flex justify-center">
            <input
              type="number"
              placeholder="task"
              v-model="store.task"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
            />
          </div>
          <div>
            <p><small>Users</small></p>
          </div>
          <div class="flex justify-center">
            <input
              type="number"
              placeholder="user"
              v-model="store.user"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
            />
          </div> -->
          <div class="flex justify-center text-red-200" v-if="!isFormValid">
            * Please fill all fields
          </div>
          <div class="flex flex-row justify-center space-x-2 mt-2">
            <div class="flex justify-center border-t-2 border-gray-200">
              <ButtonComp
                class="w-full rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:bg-red-500 focus:ring-offset-2"
                @click="store.closeEditToastMessage"
                title="Cancel"
              ></ButtonComp>
            </div>
            <div class="flex justify-center border-t-2 border-gray-200">
              <ButtonComp
                class="w-full rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:bg-blue-700 focus:ring-offset-2"
                @click="store.edit(store.id)"
                :disabled="!isFormValid"
                title="Save"
              ></ButtonComp>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
