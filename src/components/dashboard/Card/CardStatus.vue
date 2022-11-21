<script setup>
const props = defineProps(["status"]);
</script>

<template>
  <div class="status__wrapper">
    <div
      class="circle"
      :class="{
        circleActive: props.status === `Active`,
        circleInactive: props.status === `Inactive`,
        circleHold: props.status === `On Hold`,
      }"
    ></div>
    <div>
      <p
        class="card__status"
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
  @apply flex flex-row relative;
}

.circle {
  @apply rounded-full mr-2 w-2 h-2;
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
  @apply bg-emerald-400;
}
.statusHold {
  @apply bg-amber-400;
}
.statusInactive {
  @apply bg-red-500;
}
</style>
