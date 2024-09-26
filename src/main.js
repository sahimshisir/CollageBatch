import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import Cropper from 'cropperjs';


const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
