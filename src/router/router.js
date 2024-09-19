import { createRouter, createWebHistory } from 'vue-router';

// Parent components
import FrontendLayout from '../components/layout/Front.vue';
import BatchLayout from '../components/layout/Batch.vue';
import ProfileLayout from '../components/layout/Profile.vue';

// Frontend components
import Main from '../components/router/frontend/pages/main.vue';

// Pages
import Batch from '../components/frontend/pages/Batch/batch.vue';
import BatchAbout from '../components/frontend/pages/Batch/about.vue';
import BatchContent from '../components/frontend/pages/Batch/content.vue';
import BatchMember from '../components/frontend/pages/Batch/member.vue';
import BatchMedia from '../components/frontend/pages/Batch/media.vue';
import BatchMediaPhoto from '../components/frontend/pages/Batch/mediaSub/photo.vue'
import BatchMediaVideo from '../components/frontend/pages/Batch/mediaSub/video.vue'

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
        path: '/BatchPost',  // This will match "/batch/post"
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
        path: '/Media',  // This will match "/batch/BatchMedia"
        component: BatchMedia,
      },
      {
        path: '/Media/photo',  // This will match "/batch/BatchMedia"
        component: BatchMediaPhoto,
      },
 
      {
        path: '/Media/video',  // This will match "/batch/BatchMedia"
        component: BatchMediaVideo,
      },
 
    ],
  },
  {
    // Batch layout routes
    path: '/profile',
    component: ProfileLayout,
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
        path: '/About',  // This will match "/batch/BatchAbout"
        component: BatchAbout,
      },
      {
        path: '/Content',  // This will match "/batch/BatchContent"
        component: BatchContent,
      },
      {
        path: '/Member',  // This will match "/batch/BatchMember"
        component: BatchMember,
      },
      {
        path: '/Media',  // This will match "/batch/BatchMedia"
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
