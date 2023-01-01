<script setup>
import { useAddCard } from "@/stores/useAddCard.js";

const store = useAddCard();
store.fill();

const filterTabData = ["All", "Active", "Inactive", "On Hold"];
</script>

<template>
  <div class="flex flex-row border-2 border-gray-100 w-full">
    <ul class="flex flex-row space-x-2">
      <li
        v-for="status in filterTabData"
        class="text-gray-500 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 curser-pointer cursor-pointer"
        @click="store.filterData(status)"
        :class="{ active: store.selectedTab == status }"
      >
        {{ status }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  @apply bg-gray-200;
}
</style>
