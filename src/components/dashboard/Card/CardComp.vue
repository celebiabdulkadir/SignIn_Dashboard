<script setup>
import CardStatus from "@/components/dashboard/Card/CardStatus.vue";
import CardDateComp from "@/components/dashboard/Card/CardDateComp.vue";
import CardPicturesComp from "@/components/dashboard/Card/CardPicturesComp.vue";
import CardProgressBarComp from "@/components/dashboard/Card/CardProgressBarComp.vue";
import CardInfoComp from "@/components/dashboard/Card/CardInfoComp.vue";
const props = defineProps(["data"]);
</script>

<template>
  <div
    class="bg-white w-96 h-60 rounded-md shadow shadow-blue-500/40 hover:shadow-indigo-500/40 relative mt-3 ml-2"
    v-for="item in props.data"
  >
    <div class="flex flex-row justify-between space-x-16 p-2">
      <div>
        <p>{{ item.title }}</p>
      </div>
      <div class="flex flex-row space-x-4">
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.84 2.96L13.04 6.16L3.2 16H0V12.8L9.84 2.96ZM10.96 1.84L12.8 0L16 3.2L14.16 5.04L10.96 1.84Z"
              fill="#8B8B8B"
            />
          </svg>
        </div>
        <div>
          <svg
            width="4"
            height="16"
            viewBox="0 0 4 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4C3.10667 4 4 3.10667 4 2C4 0.893333 3.10667 0 2 0C0.893333 0 0 0.893333 0 2C0 3.10667 0.893333 4 2 4ZM2 6C0.893333 6 0 6.89333 0 8C0 9.10667 0.893333 10 2 10C3.10667 10 4 9.10667 4 8C4 6.89333 3.10667 6 2 6ZM2 12C0.893333 12 0 12.8933 0 14C0 15.1067 0.893333 16 2 16C3.10667 16 4 15.1067 4 14C4 12.8933 3.10667 12 2 12Z"
              fill="#8B8B8B"
            />
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          <CardStatus :status="item.status" />
        </div>
        <div class="flex flex-row justify-between mr-2">
          <div><CardDateComp :date="item.startDate" /></div>
          <div>
            <CardInfoComp :task="item.task" :user="item.user"></CardInfoComp>
          </div>
        </div>
      </div>
      <div>
        <CardPicturesComp :picture="item.membersPictures" />
        <CardProgressBarComp :progress="item.progress" />
      </div>
    </div>
  </div>
</template>
