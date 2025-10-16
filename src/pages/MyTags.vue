<template>
  <main-drawer title="My tags" @close="$router.push({ name: Routes.Homepage })">
    <text-field
      v-model="search"
      name="Name"
      placeholder="Search or create new tag"
      autocomplete="off"
    >
      <template #append-inner>
        <transition
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          enter-active-class="transition-opacity duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          leave-active-class="transition-opacity duration-300"
        >
          <main-button
            v-show="canCreateNewTag"
            rounded
            size="small"
            class="mr-1 flex-shrink-0 !border-b-1"
            @click="handleCreateTag"
          >
            Add tag
          </main-button>
        </transition>
      </template>
    </text-field>
    <ul>
      <li
        v-for="tag in filteredTags"
        :key="tag.id"
        class="mb-3 flex items-center rounded-md border border-b-2 border-gray-400 px-4 py-3"
      >
        <div>
          <div class="flex items-center gap-2 text-lg font-bold">
            <span class="block h-2 w-2 rounded-full" :class="`bg-${tag.color}`" />
            {{ tag.name }}
          </div>
          <p class="text-gray-400">Used by {{ 100 }} bookmarks</p>
        </div>
        <main-button variant="text" size="small" class="ml-auto">Delete</main-button>
        <main-button variant="text" size="small">Edit</main-button>
      </li>
    </ul>
  </main-drawer>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { Routes } from '@/router';
import { createTag, getTags } from '@/services/tags';
import type { Tag } from '@/declarations/Tag';
import MainDrawer from '@/components/MainDrawer.vue';
import TextField from '@/components/TextField.vue';
import MainButton from '@/components/MainButton.vue';

const search = ref('');

const tags = ref<Tag[]>([]);

const filteredTags = computed(() =>
  tags.value.filter((tag) =>
    tag.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
  ),
);

const canCreateNewTag = computed(
  () =>
    search.value &&
    !tags.value.some((tag) => tag.name.toLocaleLowerCase() === search.value.toLocaleLowerCase()),
);

function handleCreateTag() {
  createTag(search.value);
}

onMounted(async () => {
  tags.value = await getTags();
});
</script>
