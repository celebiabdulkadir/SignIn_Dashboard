<script setup>
const props = defineProps(["title"]);
const emit = defineEmits(["signIn"]);

const signInHandler = () => {
  emit("signIn");
};
</script>

<template>
  <button @click="signInHandler">{{ props.title }}</button>
</template>
