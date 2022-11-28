<script setup>
import { useAddCard } from "@/stores/useAddCard.js";

const store = useAddCard();
store.fill();
// const filterHandler = (status) => {
//   console.log(status);
//   ;
// };
const filterTabData = ["All", "Active", "Inactive", "On Hold", "Completed"];
</script>

<template>
  <div class="flex space-x-48 flex-row border-2 border-gray-100 w-full">
    <ul class="flex flex-row space-x-4">
      <li
        v-for="status in filterTabData"
        class="text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 curser-pointer hover:text-white cursor-pointer"
        @click="store.filterData(status)"
      >
        {{ status }}
      </li>
    </ul>
  </div>
</template>
