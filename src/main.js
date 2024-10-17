import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import { globalVariables } from './globalVariables'
import Vue3DraggableResizable from 'vue3-draggable-resizable';
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css';
import axios from 'axios';




const app = createApp(App);

// Use the router
app.use(router);

// Register the draggable resizable component globally
app.component('vue-draggable-resizable', Vue3DraggableResizable);
app.provide('globalVariables', globalVariables)
// Mount the app
app.mount('#app');
