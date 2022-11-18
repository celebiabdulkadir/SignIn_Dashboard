<script setup>
let sideBar = [
  { name: "Dashboard", location: "src/assets/SideBarLogos/1.Logo.svg" },
  { name: "Projects", location: "src/assets/SideBarLogos/2.Logo.svg" },
  { name: "Modules", location: "src/assets/SideBarLogos/3.Logo.svg" },
  { name: "Sprint", location: "src/assets/SideBarLogos/4.Logo.svg" },
  { name: "Members", location: "src/assets/SideBarLogos/5.Logo.svg" },
  { name: "Reports", location: "src/assets/SideBarLogos/6.Logo.svg" },
];
</script>
<template>
  <div class="w-60 h-full shadow-md bg-white px-1 absolute">
    <ul class="relative">
      <li class="relative" v-for="(item, index) in sideBar" :key="item.name">
        <a
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img :src="item.location" :alt="index" />{{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
