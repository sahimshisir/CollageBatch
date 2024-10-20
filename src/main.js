import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import { globalVariables } from './globalVariables'
import Toast from 'vue-toastification'; // Import the toastification plugin
import 'vue-toastification/dist/index.css';
import axios from 'axios';


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
  };

const app = createApp(App);

// Use the router
app.use(router);
app.use(Toast, options);
// Register the draggable resizable component globally
// app.component('vue-draggable-resizable', Vue3DraggableResizable);
app.provide('globalVariables', globalVariables)
// Mount the app
app.mount('#app');
