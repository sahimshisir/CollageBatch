import { createRouter, createWebHistory } from 'vue-router';

// Parent components
import FrontendLayout from '../components/layout/Front.vue';
import BatchLayout from "../components/layout/batch.vue";
import ProfileLayout from '../components/layout/Profile.vue';
import Auth from '../components/layout/Authen.vue';

// Authentication
import login from "../components/auth/login.vue";
import register from "../components/auth/register.vue";

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

// Profile
import Profile from '../components/frontend/pages/Profile/profile.vue';
import ProfileAbout from '../components/frontend/pages/Profile/about.vue';
import ProfileContent from '../components/frontend/pages/Profile/content.vue';
import ProfileMember from '../components/frontend/pages/Profile/member.vue';
import ProfileMedia from '../components/frontend/pages/Profile/media.vue';
import ProfileMediaPhoto from '../components/frontend/pages/Profile/mediaSub/photo.vue'
import ProfileMediaVideo from '../components/frontend/pages/Profile/mediaSub/video.vue'

const routes = [
  {
    // Frontend layout routes
    path: '/',
    component: Auth,
    children: [
      {
        path: '',  // This will match "/frontend" and load Main.vue
        component: login,
      },
      {
        path: 'register',  // This will match "/frontend" and load Main.vue
        component: register,
      },
     
    ],
  },
  {
    // Frontend layout routes
    path: '/home',
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
        path: '/BatchMedia',  // This will match "/batch/BatchMedia"
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
        component: Profile,
      },
      {
        path: '/Post',  // This will match "/batch/post"
        component: Profile,
      },
      {
        path: '/About',  // This will match "/batch/BatchAbout"
        component: ProfileAbout,
      },
      {
        path: '/Content',  // This will match "/batch/BatchContent"
        component: ProfileContent,
      },
      {
        path: '/Member',  // This will match "/batch/BatchMember"
        component: ProfileMember,
      },
      {
        path: '/Media',  // This will match "/batch/BatchMedia"
        component: ProfileMedia,
      },
      {
        path: '/media_profile_photo',  // This will match "/batch/BatchMedia"
        component: ProfileMediaPhoto,
      },
 
      {
        path: '/media_profile_video',  // This will match "/batch/BatchMedia"
        component: ProfileMediaVideo,
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
