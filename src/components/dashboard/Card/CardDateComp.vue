<script setup>
const props = defineProps(["date"]);
</script>

<template>
  <div class="mt-5 ml-5 text-gray-200 relative">
    <small>Start Date</small> <br />
    <small class="text-sm">{{ props.date }}</small>
  </div>
</template>
