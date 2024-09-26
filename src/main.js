import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import VueLazyload from 'vue-lazyload';  // Make sure VueLazyload is compatible with Vue 3

const app = createApp(App);

// Register SkeletonLoader globally


// Use VueLazyload
app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'path_to_error_image.jpg', // Optional: Image to show on load error
  loading: 'path_to_loading_image.gif', // Optional: Image to show while loading
  attempt: 1
});

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
