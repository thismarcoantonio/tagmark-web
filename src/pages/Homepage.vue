<template>
  <main-header />
  <main class="grid grid-cols-4">
    <main-card v-for="bookmark in bookmarks" :key="bookmark.id" is="article">
      <!-- TODO: Format date -->
      <time :datetime="`${bookmark.date}`">{{ bookmark.date }}</time>
      <h1>{{ bookmark.title }}</h1>
      <p>{{ bookmark.description }}</p>
      <div>
        <span>{{ bookmark.tags.length }} tags</span>
        <span v-if="bookmark.links.length">{{ bookmark.links.length }} links</span>
      </div>
    </main-card>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue';
import MainCard from '@/components/MainCard.vue';

const bookmarks = [
  {
    id: 0,
    date: 1758433274654,
    title: 'Artigo sobre pesquisa de fisica quantica',
    description:
      'A física quântica tem transformado nossa compreensão do universo ao revelar fenômenos invisíveis no mundo clássico.',
    links: ['https://', 'https://'],
    tags: ['0', '1', '2'],
  },
];
</script>
