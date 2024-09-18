
import {
    createRouter,
    createWebHistory
  } from 'vue-router';

//   paraent component
  import FrontendLayout from '../components/layout/Front.vue';
  import BatchLayout from '../components/layout/batch.vue'

// frontend component
import Main from '../components/frontend/pages/main.vue';


// pages
import Batch from '../components/frontend/pages/Batch/batch.vue'
// include batch page
import BatchAbout from '../components/frontend/pages/Batch/about.vue'
import BatchContent from '../components/frontend/pages/Batch/content.vue'
import BatchMember from '../components/frontend/pages/Batch/member.vue'
import BatchMedia from '../components/frontend/pages/Batch/media.vue'


const routes = [
    {
      // front vue routes
      path: '/frontend',
      component: FrontendLayout,
      children: [
        {
          path: '/',
          component: Main,
        },
        {
          path: '/yourBatch',
          component: Batch,
        },
        
      ],
      // batch vue routes
      path: '/batch',
      component: BatchLayout,
      children: [
        {
          path: '/',
          component: Batch,
        },
        {
          path: '/BatchAbout',
          component: BatchAbout,
        },
        {
          path: '/BatchContent',
          component: BatchContent,
        },
        {
          path: '/BatchMember',
          component: BatchMember,
        },
        {
          path: '/BatchMedia',
          component: BatchMedia,
        },
        
      ]
    },
  ];
  
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;