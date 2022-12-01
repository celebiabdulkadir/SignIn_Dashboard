<script setup>
import { ref, onMounted } from "vue";
import members from "@/assets/data/members.json";
</script>

<template>
  <div
    class="flex flex-row justify-between w-1/2 sm:w-full border border-b-2 border-gray-100 hover:shadow-indigo-500/40 mx-2 mt-12"
  >
    <div class="flex">Users</div>
    <div class="flex mx-2">Role</div>
  </div>
  <div
    v-for="item in members"
    class="flex flex-column justify-between border-gray-50 border-b-2 py-1 w-1/2 sm:w-full"
  >
    <div class="flex justify-between w-full">
      <div class="flex space-x-2">
        <div><img class="members_image" v-bind:src="item.picture" /></div>

        <div>{{ item.name }}</div>
      </div>
      <div class="flex space-x-10 items-center mx-2">
        {{ item.role }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.members_image {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1%;
}
</style>
