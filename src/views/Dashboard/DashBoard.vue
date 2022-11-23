<script setup>
import { ref } from "vue";
import SideBar from "@/components/dashboard/SideBar/SideBar.vue";
import HeaderComp from "@/components/dashboard/Header/HeaderComp.vue";
import FilterBarUpComp from "@/components/dashboard/FilterBar/FilterBarUpComp.vue";
import AddPopUpComp from "./AddPopUpComp.vue";
import data from "@/assets/data/data.json";
import { RouterLink, RouterView } from "vue-router";
const showAddPopup = ref(false);

const closePopup = () => {
  showAddPopup.value = false;
};

const addCard = () => {
  showAddPopup.value = true;
};
</script>
<template>
  <div v-if="showAddPopup">
    <AddPopUpComp :showAddPopup="showAddPopup" @close="closePopup"> </AddPopUpComp>
  </div>
  <div class="flex space-x-2 my-4">
    <div>
      <SideBar></SideBar>
    </div>

    <div>
      <div><HeaderComp></HeaderComp></div>
      <div>
        <FilterBarUpComp @addCard="addCard"></FilterBarUpComp>
      </div>

      <div class="flex flex-column flex-wrap space-x-2 space-y-3">
        <RouterView :data="data"></RouterView>
      </div>
    </div>
  </div>
</template>
