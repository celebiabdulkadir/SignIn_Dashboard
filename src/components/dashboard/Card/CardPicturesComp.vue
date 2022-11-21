<script setup>
const props = defineProps(["picture"]);
</script>

<template>
  <div class="members">
    <p>Members</p>
    <div class="flex flex-row">
      <img v-for="item in props.picture" class="members_image" v-bind:src="item" />
      <!-- <img class="members_image" v-bind:src="'../../src/assets/icons/added.png'" /> -->
    </div>
  </div>
</template>

<style scoped>
.members {
  position: relative;
  /* margin-top: 26%; */
  height: auto;
  width: auto;
  color: #3c557a;
  margin-left: 5%;
  margin-right: 5%;
}
.members > p {
  margin-bottom: 2px !important;
  margin-left: 2%;
}

.members_image {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1%;
}
</style>
