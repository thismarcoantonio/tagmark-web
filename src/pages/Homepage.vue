<template>
  <main-header />
  <main class="px-4 md:grid md:grid-cols-4">
    <main-card
      v-for="bookmark in bookmarksStore.bookmarks"
      :key="bookmark.id"
      class="w-full"
      is="article"
    >
      <div class="flex gap-y-2.5">
        <main-tag>{{ bookmark.tags.length }} tags</main-tag>
        <main-tag v-if="bookmark.links.length">{{ bookmark.links.length }} links</main-tag>
      </div>
      <h1>{{ bookmark.title }}</h1>
      <p>{{ bookmark.description }}</p>
      <time :datetime="`${bookmark.createdAt}`">
        {{ dateUtils.formatDate(bookmark.createdAt) }}
      </time>
    </main-card>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import { useBookmarksStore } from '@/stores/bookmarks';
import * as dateUtils from '@/utils/date';
import MainHeader from '@/components/MainHeader.vue';
import MainCard from '@/components/MainCard.vue';
import MainTag from '@/components/MainTag.vue';

const bookmarksStore = useBookmarksStore();
</script>
