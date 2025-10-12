import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes, privateRoute } from '@/router/auth-guard';
import Homepage from '@/pages/Homepage.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import MyTags from '@/pages/MyTags.vue';
import SaveBookmark from '@/pages/SaveBookmark.vue';

export enum Routes {
  Login = 'login',
  Register = 'register',
  Homepage = 'homepage',
  MyTags = 'tags',
  SaveBookmark = 'bookmark',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.Homepage,
      component: Homepage,
      beforeEnter: [privateRoute],
      children: [
        { path: '/tags', name: Routes.MyTags, component: MyTags },
        { path: '/bookmark/:bookmarkId?', name: Routes.SaveBookmark, component: SaveBookmark },
      ],
    },
    {
      path: '/login',
      name: Routes.Login,
      component: Login,
      beforeEnter: [authRoutes],
    },
    {
      path: '/register',
      name: Routes.Register,
      component: Register,
      beforeEnter: [authRoutes],
    },
  ],
});

export default router;
