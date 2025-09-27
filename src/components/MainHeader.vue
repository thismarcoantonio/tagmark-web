<template>
  <header class="flex items-center p-4">
    <h1 class="text-xl font-bold mr-4"><span class="text-green-700">Tag</span>Mark</h1>
    <input
      class="border border-neutral-200 bg-white rounded-full px-4 py-2 w-1/2"
      placeholder="Search..."
    />
    <main-button variant="secondary" class="ml-auto mr-3" :to="{ path: Routes.ManageTags }">
      My tags
    </main-button>
    <main-button>New bookmark</main-button>
  </header>
</template>

<script lang="ts" setup>
import MainButton from '@/components/MainButton.vue';
import { Routes } from '@/router';
</script>
