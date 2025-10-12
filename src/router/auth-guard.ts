import { Routes } from '@/router';
import { authService } from '@/services/auth';
import type { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router';

export async function privateRoute(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) {
  const isUserAuthenticated = await authService.checkUserAuth();
  if (isUserAuthenticated) return next();
  return next({ name: Routes.Login });
}

export async function authRoutes(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedGeneric,
  next: NavigationGuardNext,
) {
  const isUserAuthenticated = await authService.checkUserAuth();
  if (isUserAuthenticated) return next({ name: Routes.Homepage });
  return next();
}
