<script setup>
const props = defineProps(["status"]);
</script>

<template>
  <div class="status__wrapper">
    <div
      class="circle flex flex-row justify-center align-middle"
      :class="{
        circleActive: props.status === `Active`,
        circleInactive: props.status === `Inactive`,
        circleHold: props.status === `On Hold`,
      }"
    ></div>
    <div>
      <p
        class="card__status flex"
        :class="{
          statusActive: props.status === `Active`,
          statusInactive: props.status === `Inactive`,
          statusHold: props.status === `On Hold`,
        }"
      >
        {{ props.status }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.status__wrapper {
  @apply flex  relative ml-4;
}

.circle {
  @apply rounded-full mr-2 w-2 h-2 justify-center mt-1.5;
}

.circleActive {
  @apply bg-emerald-400;
}
.circleHold {
  @apply bg-amber-400;
}
.circleInactive {
  @apply bg-red-500;
}

.card__status {
  @apply text-sm  font-medium font-sans;
}
.statusActive {
  @apply text-emerald-400;
}
.statusHold {
  @apply text-amber-400;
}
.statusInactive {
  @apply text-red-500;
}
</style>
