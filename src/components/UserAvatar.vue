<template>
  <main-menu>
    <template #activator>
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full border border-b-4 border-gray-600 bg-blue-500 text-sm font-bold text-white decoration-0 hover:bg-blue-700 md:h-13 md:w-13 md:text-base"
      >
        MA
      </div>
    </template>
    <main-menu-item>
      <template #prepend>
        <settings-icon :size="20" />
      </template>
      Settings
    </main-menu-item>
    <main-menu-item @click="logout">
      <template #prepend>
        <log-out-icon :size="20" />
      </template>
      Logout
    </main-menu-item>
  </main-menu>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { SettingsIcon, LogOutIcon } from 'lucide-vue-next';
import { Routes } from '@/router';
import { authService } from '@/services/auth';
import MainMenu from '@/components/MainMenu.vue';
import MainMenuItem from '@/components/MainMenuItem.vue';

const $router = useRouter();

async function logout() {
  await authService.logout();
  $router.push({ name: Routes.Login });
}
</script>
