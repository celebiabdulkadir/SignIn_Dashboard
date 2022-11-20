<script setup>
import SideBar from "@/components/dashboard/SideBar/SideBar.vue";
import HeaderComp from "@/components/dashboard/Header/HeaderComp.vue";
import CardComp from "@/components/dashboard/Card/CardComp.vue";
import FilterBarUpComp from "@/components/dashboard/FilterBar/FilterBarUpComp.vue";
</script>
<template>
  <div class="flex space-x-64">
    <div><SideBar></SideBar></div>
    <div>
      <div><HeaderComp></HeaderComp></div>
      <div>
        <FilterBarUpComp></FilterBarUpComp>
      </div>
      <div class="flex flex-row p-2 m-2 space-x-2">
        <div><CardComp></CardComp></div>
        <div><CardComp></CardComp></div>
        <div><CardComp></CardComp></div>
      </div>
    </div>
  </div>
</template>
