<script setup>
import FilterComp from "@/components/dashboard/FilterBar/FilterComp.vue";
import AddComp from "@/components/dashboard/FilterBar/AddComp.vue";
</script>
<template>
  <div class="flex sm:block space-x-3 mt-8 sm:mt-4 w-full">
    <div class="flex"><AddComp></AddComp></div>

    <div class="flex"><FilterComp></FilterComp></div>
  </div>
</template>
