<template>
  <header class="p-4 md:flex md:items-center md:justify-between">
    <main-title class="mb-6 md:mb-0" />
    <div class="relative flex md:w-1/2">
      <input
        class="w-full rounded-full border border-b-4 border-neutral-200 bg-white px-4 py-3 outline-0"
        placeholder="Search..."
      />
      <search-icon class="absolute top-[13px] right-5" :size="22" />
    </div>
    <div class="mt-4 flex items-center md:mt-0">
      <main-button rounded variant="secondary" class="mr-3" :to="{ path: Routes.MyTags }">
        My tags
      </main-button>
      <main-button rounded class="mr-6" :to="{ path: Routes.SaveBookmark }">
        New bookmark
      </main-button>
      <div class="absolute top-2 right-4 md:static md:top-0 md:right-0">
        <user-avatar />
      </div>
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
