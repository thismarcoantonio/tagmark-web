<template>
  <header class="flex items-center p-4">
    <h1 class="mr-4 text-xl font-bold"><span class="text-green-700">Tag</span>Mark</h1>
    <input
      class="w-1/2 rounded-full border border-neutral-200 bg-white px-4 py-2"
      placeholder="Search..."
    />
    <main-button variant="secondary" class="mr-3 ml-auto" :to="{ path: Routes.MyTags }">
      My tags
    </main-button>
    <main-button>New bookmark</main-button>
  </header>
</template>

<script lang="ts" setup>
import MainButton from '@/components/MainButton.vue';
import { Routes } from '@/router';
</script>
