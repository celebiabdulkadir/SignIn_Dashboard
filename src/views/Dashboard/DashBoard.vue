<script setup>
import SideBar from "@/components/dashboard/SideBar/SideBar.vue";
import HeaderComp from "@/components/dashboard/Header/HeaderComp.vue";
import AddPopUpComp from "./AddPopUpComp.vue";
import { RouterView } from "vue-router";
import { useAddCard } from "@/stores/useAddCard.js";
import ToastMessage from "./ToastMessage.vue";
import EditToastScreen from "./EditToastScreen.vue";
const store = useAddCard();
store.fill();
</script>
<template>
  <div v-if="store.showAddPopup">
    <AddPopUpComp> </AddPopUpComp>
  </div>
  <div v-if="store.showEditToastMessage">
    <EditToastScreen> </EditToastScreen>
  </div>
  <div v-if="store.showToastMessage">
    <ToastMessage> </ToastMessage>
  </div>

  <div class="flex space-x-2 sm:space-x-1 my-4">
    <div>
      <SideBar></SideBar>
    </div>

    <div>
      <div class=""><HeaderComp></HeaderComp></div>

      <div class="flex flex-column flex-wrap space-x-2 space-y-3 w-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
