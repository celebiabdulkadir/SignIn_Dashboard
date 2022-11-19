<script setup>
import SideBar from "@/components/dashboard/SideBar/SideBar.vue";
import HeaderComp from "@/components/dashboard/Header/HeaderComp.vue";
// import FilterComp from "../components/dashboard/header/FilterBar/FilterComp.vue";
// import AddComp from "../components/dashboard/Header/FilterBar/AddComp.vue";
import FilterBarUpComp from "@/components/dashboard/FilterBar/FilterBarUpComp.vue";
</script>
<template>
  <div class="flex space-x-64">
    <div><SideBar></SideBar></div>
    <div>
      <div><HeaderComp></HeaderComp></div>
      <div class="flex flex-row">
        <!-- <div><AddComp></AddComp></div>

        <div><FilterComp></FilterComp></div> -->
      </div>
      <div>
        <FilterBarUpComp></FilterBarUpComp>
      </div>
    </div>
  </div>
</template>
