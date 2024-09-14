
import {
    createRouter,
    createWebHistory
  } from 'vue-router';

//   paraent component
  import FrontendLayout from '../components/layout/Front.vue';

// frontend component
import Main from '../components/frontend/pages/main.vue';



const routes = [
    {
      path: '/frontend',
      component: FrontendLayout,
      children: [
        {
          path: '/',
          component: Main,
        },
        
      ]
    },
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;