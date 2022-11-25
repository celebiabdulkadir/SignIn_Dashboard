import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "@/main.css";
const firebaseConfig = {
  apiKey: "AIzaSyAo8g-V-A4oslm2L_2gcGZh-e-P0JkVuMQ",
  authDomain: "signin-5369b.firebaseapp.com",
  projectId: "signin-5369b",
  storageBucket: "signin-5369b.appspot.com",
  messagingSenderId: "616809670508",
  appId: "1:616809670508:web:d2dd6fc52f060abfa47549",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore(initializeApp(firebaseConfig));
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
