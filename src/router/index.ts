import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/pages/Homepage.vue';
import Login from '@/pages/Login.vue';

enum Routes {
  Login = 'login',
  Homepage = 'homepage',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: Routes.Homepage, component: Homepage },
    { path: '/login', name: Routes.Login, component: Login },
  ],
});

export default router;
