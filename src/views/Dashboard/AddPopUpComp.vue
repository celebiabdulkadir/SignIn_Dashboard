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

const submitHandler = (event) => {
  event.preventDefault();

  if (!isFormValid.value) return;
  store.add();
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="store.showAddPopup"
      class="fixed inset-0 bg-gray-600 bg-opacity-60 overflow-y-auto h-full w-full"
    >
      <form @submit="submitHandler">
        <div
          class="relative top-40 mx-auto p-5 border w-96 sm:top-0 sm:w-full sm:h-full h-fit shadow-lg rounded-md bg-white"
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
                required="required"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
              />
            </div>
            <div>
              <p><small>Start Date</small></p>
            </div>
            <div>
              <input
                type="date"
                placeholder="start Date"
                v-model="store.startDate"
                required="required"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
              />
            </div>

            <div>
              <p><small>Status</small></p>
            </div>
            <div class="block text-sm font-medium w-full text-gray-900 dark:text-white">
              <select
                v-model="store.status"
                required="required"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-1"
              >
                <option value="" disabled selected>Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>

            <div class="flex flex-row justify-center space-x-2 mt-2">
              <div class="flex justify-center border-t-2 border-gray-200">
                <ButtonComp
                  class="w-full rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:bg-red-500 focus:ring-offset-2"
                  @click="store.close"
                  title="Cancel"
                ></ButtonComp>
              </div>
              <div class="flex justify-center border-t-2 border-gray-200">
                <input
                  type="submit"
                  @input="submitHandler"
                  value="Create"
                  class="w-full rounded-md border border-transparent bg-blue-400 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:bg-blue-700 focus:ring-offset-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </Teleport>
</template>
