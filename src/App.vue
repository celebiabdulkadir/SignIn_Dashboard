<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import ButtonComp from "@/components/ButtonComp.vue";
// import { auth } from "@/db";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
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
  <header>
    <div class="wrapper bg-neutral-50">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <!-- <RouterLink
          class="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          to="/"
          >Log In</RouterLink -->
        >
        <!-- <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink> -->
        <!-- <ButtonComp
          class="group relative flex justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @signIn="handleSignOut"
          title="Log Out"
          v-if="isloggedIn"
        ></ButtonComp> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
nav button {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
