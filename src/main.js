import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import { globalVariables } from './globalVariables';
import Toast from 'vue-toastification'; // Import Toastification
import 'vue-toastification/dist/index.css'; // Toastification CSS

const options = {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 1,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  toastClassName:"toserBgClass", // Apply custom class
};

const app = createApp(App);
app.use(router);
app.use(Toast, options); // Apply toast options globally
app.provide('globalVariables', globalVariables);
app.mount('#app');
