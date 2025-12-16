import { defineStore } from 'pinia';
import { useStorage } from '@/utils/storage';
import * as bookmarksService from '@/services/bookmarks';
import type { Bookmark } from '@/declarations/Bookmark';

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = useStorage<Bookmark[]>('bookmarks', []);

  async function getBookmarks() {
    if (bookmarks.value.length) return bookmarks.value;
    bookmarks.value = await bookmarksService.getBookmarks();
    return bookmarks.value;
  }

  async function createBookmark(
    bookmark: Pick<Bookmark, 'title' | 'description' | 'links' | 'tags'>,
  ) {
    const newBookmark = await bookmarksService.createBookmark(bookmark);
    bookmarks.value.push(newBookmark);
    return newBookmark;
  }

  async function deleteBookmark(id: Bookmark['id']) {
    const success = await bookmarksService.deleteBookmark(id);
    if (success) {
      bookmarks.value = bookmarks.value.filter((bookmark) => bookmark.id !== id);
    }
  }

  return {
    bookmarks,
    getBookmarks,
    createBookmark,
    deleteBookmark,
  };
});
