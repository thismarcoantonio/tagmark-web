import { defineStore } from 'pinia';
import { useStorage } from '@/utils/storage';
import * as tagsService from '@/services/tags';
import type { Tag } from '@/declarations/Tag';

export const useTagsStore = defineStore('tags', () => {
  const tags = useStorage<Tag[]>('tags', []);

  async function getTags() {
    if (tags.value.length) return tags.value;
    tags.value = await tagsService.getTags();
    return tags.value;
  }

  async function createTag(name: string) {
    const newTag = await tagsService.createTag(name);
    tags.value.push(newTag);
    return newTag;
  }

  async function deleteTag(id: Tag['id']) {
    const success = await tagsService.deleteTag(id);
    if (success) {
      tags.value = tags.value.filter((tag) => tag.id !== id);
    }
  }

  return {
    tags,
    getTags,
    createTag,
    deleteTag,
  };
});
