<template>
  <main-header />
  <div class="mb-6 flex gap-2 overflow-x-auto px-4 font-semibold">
    <main-tag
      :active="!activeTag"
      bg-color="bg-green-600"
      class="cursor-pointer text-white"
      @click="activeTag = undefined"
    >
      All
    </main-tag>
    <main-tag
      v-for="tag in tagsStore.tags"
      is="button"
      :key="tag.id"
      :bg-color="tag.color"
      :active="activeTag === tag.id"
      class="cursor-pointer text-white"
      @click="activeTag = tag.id"
    >
      {{ tag.name }}
    </main-tag>
  </div>
  <main class="px-4 md:grid md:grid-cols-4">
    <main-card
      v-for="bookmark in bookmarksStore.bookmarks"
      :key="bookmark.id"
      class="w-full"
      is="article"
    >
      <div class="mb-3 flex gap-x-2">
        <main-tag size="small" bg-color="bg-yellow-300" class="text-gray-800">
          {{ bookmark.tags.length }} tags
        </main-tag>
        <main-tag
          v-if="bookmark.links.length"
          size="small"
          bg-color="bg-red-300"
          class="text-gray-800"
        >
          {{ bookmark.links.length }} links
        </main-tag>
      </div>
      <h1 class="mb-3 text-xl font-bold text-gray-800">{{ bookmark.title }}</h1>
      <p class="mb-2">{{ bookmark.description }}</p>
      <time :datetime="`${bookmark.createdAt}`" class="text-sm text-gray-400">
        {{ dateUtils.formatDate(bookmark.createdAt) }}
      </time>
    </main-card>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as dateUtils from '@/utils/date';
import { useTagsStore } from '@/stores/tags';
import { useBookmarksStore } from '@/stores/bookmarks';
import MainHeader from '@/components/MainHeader.vue';
import MainCard from '@/components/MainCard.vue';
import MainTag from '@/components/MainTag.vue';

const tagsStore = useTagsStore();
const bookmarksStore = useBookmarksStore();

const activeTag = ref<string>();

onMounted(async () => {
  await bookmarksStore.getBookmarks();
  await tagsStore.getTags();
});
</script>
