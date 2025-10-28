import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { Routes } from '@/router';
import { authService } from '@/services/auth';
import { useStorage } from '@/utils/storage';
import type { User } from '@/declarations/User';

export const useUserStore = defineStore('user', () => {
  const $router = useRouter();
  const user = useStorage<User | null>('user', null);
  const isAuthenticated = ref(false);

  async function checkUserAuth() {
    if (isAuthenticated.value) return isAuthenticated.value;

    const firebaseUser = await authService.checkUserAuth();
    if (!firebaseUser) return;

    user.value = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
    };
    isAuthenticated.value = true;
  }

  async function createOrLoginWithGoogleAccount() {
    const firebaseUser = await authService.createOrLoginWithGoogleAccount();
    user.value = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
    };
    isAuthenticated.value = true;
    $router.push({ name: Routes.Homepage });
  }

  async function createUserAccount(email: string, password: string) {
    const firebaseUser = await authService.createUserAccount(email, password);
    user.value = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
    };
    isAuthenticated.value = true;
    $router.push({ name: Routes.Homepage });
  }

  async function loginUserAccount(email: string, password: string) {
    const firebaseUser = await authService.loginUserAccount(email, password);
    user.value = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || '',
    };
    isAuthenticated.value = true;
    $router.push({ name: Routes.Homepage });
  }

  async function logout() {
    await authService.logout();
    user.value = null;
    isAuthenticated.value = false;
    $router.push({ name: Routes.Login });
  }

  return {
    user,
    isAuthenticated,
    checkUserAuth,
    createOrLoginWithGoogleAccount,
    createUserAccount,
    loginUserAccount,
    logout,
  };
});
