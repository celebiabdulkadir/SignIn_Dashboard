<script setup>
import { computed } from "vue";
const props = defineProps(["email", "label"]);
const emit = defineEmits(["update:email"]);

const emailHandler = (event) => {
  emit("update:email", event.target.value);
};

const isValid = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email);
});
</script>

<template>
  <label for="email-address" class="sr-only">Email address</label>
  <input
    id="email-address"
    name="email"
    type="email"
    autocomplete="email"
    :value="email"
    required
    @input="emailHandler"
    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    placeholder="Email address"
  />
  <div v-if="!isValid">Please enter valid e-mail</div>
</template>
