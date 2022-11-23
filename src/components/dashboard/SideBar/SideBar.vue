<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import ButtonComp from "@/components/ButtonComp.vue";
import { RouterLink } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import sideBar from "@/assets/data/sideBarData.json";

const newSideBar = ref();

newSideBar.value = sideBar;

const isloggedIn = ref(false);

const auth = ref();
console.log(isloggedIn.value);
onMounted(() => {
  auth.value = getAuth();
  onAuthStateChanged(auth.value, (user) => {
    if (user) {
      isloggedIn.value = true;
      console.log(isloggedIn.value);
    } else {
      isloggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth.value).then(() => {
    router.push("/");
  });
};
</script>
<template>
  <div class="w-60 sm:w-48 h-full shadow-md bg-neutral-50 px-1 absolute;">
    <ul class="flex flex-col space-y-1">
      <span
        class="flex space-x-4 items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded mb-6"
      >
        <span
          ><svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#0075FF" stroke-width="4" />
            <circle cx="24" cy="22" r="6" stroke="#1BE3A7" stroke-width="4" />
          </svg>
        </span>

        <span class="flex space-x-16">
          <span>ChirKuut</span>
        </span>
      </span>
      <RouterLink
        v-for="(item, index) in sideBar"
        :to="{ path: `/dashboard/${item.name}` }"
      >
        <li
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          :key="item.name"
        >
          <span
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <img :src="`/${item.location}`" :alt="index" class="mr-4" />
            {{ item.name }}
          </span>
        </li></RouterLink
      >
    </ul>
    <div class="flex justify-center border-t-2 border-gray-200">
      <ButtonComp
        class="w-full mt-20 rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @signIn="handleSignOut"
        title="Log Out"
        v-if="isloggedIn"
      ></ButtonComp>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-gray-200;
}
</style>
