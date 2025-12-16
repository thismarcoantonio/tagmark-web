import { defineStore } from 'pinia';
import { useStorage } from '@/utils/storage';
import * as bookmarksService from '@/services/bookmarks';
import type { Bookmark } from '@/declarations/Bookmark';

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = useStorage<{ [key: Bookmark['id']]: Bookmark }>('bookmarks', {});

  async function getBookmarks() {
    if (Object.keys(bookmarks.value).length) return bookmarks.value;
    const data = await bookmarksService.getBookmarks();
    const bookmarksObject = data.reduce(
      (result, bookmark) => ({ ...result, [bookmark.id]: bookmark }),
      {},
    );
    bookmarks.value = bookmarksObject;
    return bookmarks.value;
  }

  async function createBookmark(
    bookmark: Pick<Bookmark, 'title' | 'description' | 'links' | 'tags'>,
  ) {
    const newBookmark = await bookmarksService.createBookmark(bookmark);
    bookmarks.value[newBookmark.id] = newBookmark;
    return newBookmark;
  }

  async function deleteBookmark(id: Bookmark['id']) {
    const success = await bookmarksService.deleteBookmark(id);
    if (success) {
      delete bookmarks.value[id];
    }
  }

  return {
    bookmarks,
    getBookmarks,
    createBookmark,
    deleteBookmark,
  };
});
