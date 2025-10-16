<template>
  <main-drawer title="My tags" @close="$router.push({ name: Routes.Homepage })">
    <text-field v-model="search" name="Name" placeholder="Search or create new tag" />
    <ul>
      <li
        v-for="tag in filteredTags"
        :key="tag.id"
        class="mb-3 flex items-center rounded-md border border-b-2 border-gray-400 px-4 py-3"
      >
        <div>
          <div class="flex items-center gap-2 text-lg font-bold">
            <span class="block h-2 w-2 rounded-full" :class="tag.color" />
            {{ tag.name }}
          </div>
          <p class="text-gray-400">Used by {{ tag.usedBy }} bookmarks</p>
        </div>
        <main-button variant="text" size="small" class="ml-auto">Delete</main-button>
        <main-button variant="text" size="small">Edit</main-button>
      </li>
    </ul>
  </main-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Routes } from '@/router';
import MainDrawer from '@/components/MainDrawer.vue';
import TextField from '@/components/TextField.vue';
import MainButton from '@/components/MainButton.vue';

const search = ref('');

const tags = [
  { id: 0, name: 'Física', usedBy: 100, color: 'bg-red-800' },
  { id: 1, name: 'Espiritualidade', usedBy: 22, color: 'bg-yellow-600' },
  { id: 2, name: 'Gaming', usedBy: 3, color: 'bg-blue-700' },
];

const filteredTags = computed(() =>
  tags.filter((tag) => tag.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())),
);
</script>
