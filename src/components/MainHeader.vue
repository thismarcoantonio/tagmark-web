<template>
  <header class="flex items-center justify-between p-4">
    <main-title />
    <div class="relative flex w-1/2">
      <input
        class="w-full rounded-full border border-b-4 border-neutral-200 bg-white px-4 py-3 outline-0"
        placeholder="Search..."
      />
      <search-icon class="absolute top-[13px] right-5" :size="22" />
    </div>
    <div class="flex items-center">
      <main-button rounded variant="secondary" class="mr-3" :to="{ path: Routes.MyTags }">
        My tags
      </main-button>
      <main-button rounded class="mr-6">New bookmark</main-button>
      <user-avatar />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { SearchIcon } from 'lucide-vue-next';
import { Routes } from '@/router';
import MainTitle from '@/components/MainTitle.vue';
import MainButton from '@/components/MainButton.vue';
import UserAvatar from '@/components/UserAvatar.vue';
</script>
