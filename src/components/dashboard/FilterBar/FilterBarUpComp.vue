<script setup>
import FilterComp from "@/components/dashboard/FilterBar/FilterComp.vue";
import AddComp from "@/components/dashboard/FilterBar/AddComp.vue";

const emits = defineEmits(["addCard"]);

const addTask = () => {
  emits("addCard");
};
</script>
<template>
  <div class="flex flex-row relative mt-8">
    <div><AddComp @add="addTask"></AddComp></div>

    <div><FilterComp></FilterComp></div>
  </div>
</template>
