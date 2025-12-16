import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useStorage } from '@/utils/storage';
import * as tagsService from '@/services/tags';
import type { Tag } from '@/declarations/Tag';

export const useTagsStore = defineStore('tags', () => {
  const userStore = useUserStore();
  const tags = useStorage<{ [key: Tag['id']]: Tag }>('tags', {});

  const tagsList = computed(() => Object.values(tags.value));

  async function getTags() {
    if (tagsList.value.length) return tags.value;
    const data = await tagsService.getTags(userStore.user!.id);
    const tagsObject = data.reduce((result, tag) => ({ ...result, [tag.id]: tag }), {});
    tags.value = tagsObject;

    return tags.value;
  }

  async function createTag(name: string) {
    const newTag = await tagsService.createTag(name, userStore.user!.id);
    tags.value[newTag.id] = newTag;

    return newTag;
  }

  async function deleteTag(id: Tag['id']) {
    const success = await tagsService.deleteTag(id, userStore.user!.id);
    if (success) {
      delete tags.value[id];
    }
  }

  function getTagById(id: Tag['id']) {
    return tags.value[id];
  }

  return {
    tags,
    tagsList,
    getTags,
    getTagById,
    createTag,
    deleteTag,
    $reset() {
      tags.value = {};
    },
  };
});
