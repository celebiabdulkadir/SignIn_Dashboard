<script setup>
import FilterComp from "@/components/dashboard/FilterBar/FilterComp.vue";
import AddComp from "@/components/dashboard/FilterBar/AddComp.vue";
</script>
<template>
  <div class="flex flex-row mt-8 sm:mt-4 w-full">
    <div class=""><AddComp></AddComp></div>

    <div class=""><FilterComp></FilterComp></div>
  </div>
</template>
