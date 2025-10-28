import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';
import { Routes } from '@/router';
import { useUserStore } from '@/stores/user';

export async function privateRoute(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) {
  const userStore = useUserStore();
  await userStore.checkUserAuth();
  if (userStore.isAuthenticated) return next();
  return next({ name: Routes.Login });
}

export async function authRoutes(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) {
  const userStore = useUserStore();
  await userStore.checkUserAuth();
  if (userStore.isAuthenticated) return next({ name: Routes.Homepage });
  return next();
}
