<script setup>
import { ref } from "vue";
import SideBar from "@/components/dashboard/SideBar/SideBar.vue";
import HeaderComp from "@/components/dashboard/Header/HeaderComp.vue";
import CardComp from "@/components/dashboard/Card/CardComp.vue";
import FilterBarUpComp from "@/components/dashboard/FilterBar/FilterBarUpComp.vue";
import data from "@/assets/data/data.json";
import router from "@/router";

import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="flex space-x-2 my-4">
    <div>
      <SideBar></SideBar>
    </div>

    <div>
      <div><HeaderComp></HeaderComp></div>
      <div>
        <FilterBarUpComp></FilterBarUpComp>
      </div>
      <div>
        <RouterView></RouterView>
      </div>
      <div class="flex flex-column flex-wrap space-x-2 space-y-3">
        <CardComp :data="data"></CardComp>
      </div>
    </div>
  </div>
</template>
