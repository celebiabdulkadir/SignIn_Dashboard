<script setup>
const props = defineProps(["progress"]);
</script>

<template>
  <div class="progressText ml-2">
    Progress <span class="progressBarText mr-2">{{ props.progress }}%</span>
  </div>
  <div class="box mx-2">
    <div class="progressBar" :style="{ width: props.progress + '%' }"></div>
  </div>
</template>

<style>
.box {
  width: 95%;
  height: 8px;
  border-radius: 75px;
  background: #c3c6d4;
  text-align: right;
  align-items: center;
}
.progressBar {
  width: 100%;
  height: 8px;
  border-radius: 75px;
  background: #1be3a7;
  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.1);
  text-align: right;
  align-items: center;
}
.progressText {
  margin-top: 2px;
  color: black;
  text-align: left;
  font-size: 13px;
  font-weight: 500;
}
.progressBarText {
  color: black;
  float: right;
  font-size: 12px;
}
</style>
