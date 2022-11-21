<script setup>
const props = defineProps(["picture"]);
</script>

<template>
  <div class="members">
    <p>Members</p>
    <div class="flex flex-row">
      <img v-for="item in props.picture" class="members_image" v-bind:src="item" />
      <div class="ml-1">
        <svg
          width="25"
          height="25"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="15.5" stroke="#8B8B8B" />
          <path
            d="M21.8333 15.1667H16.8333V10.1667C16.8333 9.94566 16.7455 9.73369 16.5892 9.57741C16.433 9.42113 16.221 9.33334 16 9.33334C15.779 9.33334 15.567 9.42113 15.4107 9.57741C15.2545 9.73369 15.1667 9.94566 15.1667 10.1667V15.1667H10.1667C9.94565 15.1667 9.73369 15.2545 9.57741 15.4107C9.42113 15.567 9.33333 15.779 9.33333 16C9.33333 16.221 9.42113 16.433 9.57741 16.5893C9.73369 16.7455 9.94565 16.8333 10.1667 16.8333H15.1667V21.8333C15.1667 22.0543 15.2545 22.2663 15.4107 22.4226C15.567 22.5789 15.779 22.6667 16 22.6667C16.221 22.6667 16.433 22.5789 16.5892 22.4226C16.7455 22.2663 16.8333 22.0543 16.8333 21.8333V16.8333H21.8333C22.0543 16.8333 22.2663 16.7455 22.4226 16.5893C22.5789 16.433 22.6667 16.221 22.6667 16C22.6667 15.779 22.5789 15.567 22.4226 15.4107C22.2663 15.2545 22.0543 15.1667 21.8333 15.1667Z"
            fill="#8B8B8B"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.members {
  position: relative;
  /* margin-top: 26%; */
  height: auto;
  width: auto;
  color: #3c557a;
  margin-left: 5%;
  margin-right: 5%;
}
.members > p {
  margin-bottom: 2px !important;
  margin-left: 2%;
}

.members_image {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1%;
}
</style>
