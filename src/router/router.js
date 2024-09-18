import { createRouter, createWebHistory } from 'vue-router';

// Parent components
import FrontendLayout from '../components/layout/Front.vue';
import BatchLayout from '../components/layout/batch.vue';

// Frontend components
import Main from '../components/router/frontend/pages/main.vue';

// Pages
import Batch from '../components/frontend/pages/Batch/batch.vue';
import BatchAbout from '../components/frontend/pages/Batch/about.vue';
import BatchContent from '../components/frontend/pages/Batch/content.vue';
import BatchMember from '../components/frontend/pages/Batch/member.vue';
import BatchMedia from '../components/frontend/pages/Batch/media.vue';

const routes = [
  {
    // Frontend layout routes
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',  // This will match "/frontend" and load Main.vue
        component: Main,
      },
     
    ],
  },
  {
    // Batch layout routes
    path: '/batch',
    component: BatchLayout,
    children: [
      {
        path: '',  // This will match "/batch/post"
        component: Batch,
      },
      {
        path: '/Post',  // This will match "/batch/post"
        component: Batch,
      },
      {
        path: '/BatchAbout',  // This will match "/batch/BatchAbout"
        component: BatchAbout,
      },
      {
        path: '/BatchContent',  // This will match "/batch/BatchContent"
        component: BatchContent,
      },
      {
        path: '/BatchMember',  // This will match "/batch/BatchMember"
        component: BatchMember,
      },
      {
        path: '/BatchMedia',  // This will match "/batch/BatchMedia"
        component: BatchMedia,
      },
    ],
  },
  // Redirect root ("/") to "/frontend"
  {
    path: '/',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
