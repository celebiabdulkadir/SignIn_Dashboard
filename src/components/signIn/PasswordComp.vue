<script setup>
import { computed } from "vue";
const props = defineProps(["label", "password"]);
const emit = defineEmits(["update:password"]);

const isValid = computed(() => {
  return props.name.length > 1;
});

const nameHandler = (event) => {
  console.log("event.target.value");
  emit("update:password", event.target.value);
};
</script>

<template>
  <label for="password" class="sr-only"></label>
  <input
    id="name"
    name="name"
    type="password"
    autocomplete="current-password"
    required
    class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    placeholder="Password"
    @input="nameHandler"
    :value="password"
  />
</template>
