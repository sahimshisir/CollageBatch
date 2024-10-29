import { createRouter, createWebHistory } from 'vue-router';
import FrontendLayout from '../components/layout/Front.vue';
import BatchLayout from "../components/layout/Batch.vue";
import ProfileLayout from '../components/layout/Profile.vue';
import Auth from '../components/layout/Authen.vue';
import login from "../components/auth/login.vue";
import register from "../components/auth/register.vue";
import registerOtp from "../components/auth/registerOtp.vue";
import Main from '../components/router/frontend/pages/main.vue';
import Batch from '../components/frontend/pages/Batch/batch.vue';
import BatchAbout from '../components/frontend/pages/Batch/about.vue';
import BatchContent from '../components/frontend/pages/Batch/content.vue';
import BatchMember from '../components/frontend/pages/Batch/member.vue';
import BatchMedia from '../components/frontend/pages/Batch/media.vue';
import BatchMediaPhoto from '../components/frontend/pages/Batch/mediaSub/photo.vue';
import BatchMediaVideo from '../components/frontend/pages/Batch/mediaSub/video.vue';
import Profile from '../components/frontend/pages/Profile/profile.vue';
import ProfileAbout from '../components/frontend/pages/Profile/about.vue';
import ProfileContent from '../components/frontend/pages/Profile/content.vue';
import ProfileMember from '../components/frontend/pages/Profile/member.vue';
import ProfileMedia from '../components/frontend/pages/Profile/media.vue';
import ProfileMediaPhoto from '../components/frontend/pages/Profile/mediaSub/photo.vue';
import ProfileMediaVideo from '../components/frontend/pages/Profile/mediaSub/video.vue';

const routes = [
  {
    path: '/',
    component: Auth,
    children: [
      { path: '', component: login },
      { path: 'register', component: register },
      { path: 'registerOtp', component: registerOtp },
    ],
  },
  {
    path: '/home',
    component: FrontendLayout,
    children: [{ path: '', component: Main }],
    meta: { requiresAuth: true },
  },
  {
    path: '/batch',
    component: BatchLayout,
    children: [
      { path: '', component: Batch },
      { path: '/BatchPost', component: Batch },
      { path: '/BatchAbout', component: BatchAbout },
      { path: '/BatchContent', component: BatchContent },
      { path: '/BatchMember', component: BatchMember },
      { path: '/BatchMedia', component: BatchMedia },
      { path: '/Media/photo', component: BatchMediaPhoto },
      { path: '/Media/video', component: BatchMediaVideo },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    component: ProfileLayout,
    children: [
      { path: '', component: Profile },
      { path: '/Post', component: Profile },
      { path: '/About', component: ProfileAbout },
      { path: '/Content', component: ProfileContent },
      { path: '/Member', component: ProfileMember },
      { path: '/Media', component: ProfileMedia },
      { path: '/media_profile_photo', component: ProfileMediaPhoto },
      { path: '/media_profile_video', component: ProfileMediaVideo },
    ],
    meta: { requiresAuth: true },
  },
  { path: '/', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: '/' });
  } else {
    next();
  }
});

export default router;
