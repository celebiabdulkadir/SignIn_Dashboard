<script setup>
import SideBar from "@/components/dashboard/SideBar/SideBar.vue";
import HeaderComp from "@/components/dashboard/Header/HeaderComp.vue";
import CardComp from "@/components/dashboard/Card/CardComp.vue";
import FilterBarUpComp from "@/components/dashboard/FilterBar/FilterBarUpComp.vue";
import data from "@/assets/data/data.json";
</script>
<template>
  <div class="flex space-x-64">
    <div><SideBar></SideBar></div>
    <div>
      <div><HeaderComp></HeaderComp></div>
      <div>
        <FilterBarUpComp></FilterBarUpComp>
      </div>
      <div class="flex flex-column flex-wrap space-x-2 space-y-3">
        <CardComp :data="data"></CardComp>
      </div>
    </div>
  </div>
</template>
