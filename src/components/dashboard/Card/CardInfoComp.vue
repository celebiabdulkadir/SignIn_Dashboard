<script setup>
const props = defineProps(["task", "user"]);
</script>

<template>
  <div class="card_info flex flex-row">
    <div class="card_task">
      <p class="value">{{ props.task }}</p>
      <p class="text">Task</p>
    </div>
    <div class="card_user">
      <p class="value">{{ props.user }}</p>
      <p class="text">User</p>
    </div>
  </div>
</template>

<style scoped>
.card_info {
  background-color: #f9f9f9;
  width: 100%;
  height: auto;
  position: relative;
  float: right;
  border-radius: 10%;
  margin-top: 10%;
  margin-right: 5%;
}
.card_task {
  position: relative;
  float: left;
  width: 45%;
  margin: 10px 5px 10px 0px;
  text-align: center;
  border-right: 1px solid #cddcee;
}
.text {
  margin: 1px 10px 5px 10px;
  color: #717986;
}
.value {
  margin: 5px 10px 5px 10px;
  color: #3c557a;
  font-weight: bold;
}
.card_user {
  float: left;
  margin: 10px 5px 10px 0px;
  width: 40%;
  text-align: center;
}
</style>
