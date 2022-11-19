<script setup>
import { ref, computed } from "vue";
import EmailComp from "@/components/signIn/EmailComp.vue";
import PasswordComp from "@/components/signIn/PasswordComp.vue";
import ButtonComp from "@/components/ButtonComp.vue";

import router from "@/router";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const email = ref("");
const password = ref("");
const errMsg = ref(""); // Error Message

const signIn = async () => {
  let auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      // Signed in
      console.log(auth.currentUser.email);

      console.log("signedIn");
      router.push("/dashboard");

      // ...
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);

      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
  // router.push("/dashboard");
};
</script>

<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <div class="mt-8 space-y-6" method="">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <EmailComp v-model:email="email"></EmailComp>
          </div>
          <div>
            <PasswordComp
              v-model:password="password"
              label="isim"
            ></PasswordComp>
          </div>
        </div>
        <div v-if="errMsg">{{ errMsg }}</div>

        <div>
          <ButtonComp
            title="Log In"
            type="submit"
            @signIn="signIn"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </ButtonComp>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
