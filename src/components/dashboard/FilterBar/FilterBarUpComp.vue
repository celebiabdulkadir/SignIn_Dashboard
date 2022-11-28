<script setup>
import FilterComp from "@/components/dashboard/FilterBar/FilterComp.vue";
import AddComp from "@/components/dashboard/FilterBar/AddComp.vue";
</script>
<template>
  <div class="flex flex-row mt-8 w-full">
    <div class="w-1/6"><AddComp></AddComp></div>

    <div class="w-5/6"><FilterComp></FilterComp></div>
  </div>
</template>
