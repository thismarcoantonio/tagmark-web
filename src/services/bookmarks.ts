import { addDoc, collection, deleteDoc, getDocs, getFirestore, doc } from 'firebase/firestore';
import { Collections } from '@/config/firebase';
import type { Bookmark } from '@/declarations/Bookmark';

export async function getBookmarks() {
  const db = getFirestore();
  const bookmarksCollection = collection(db, Collections.BOOKMARKS);
  const snapshot = await getDocs(bookmarksCollection);
  const documents: Bookmark[] = [];
  snapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() } as Bookmark);
  });
  return documents;
}

export async function createBookmark(
  bookmark: Pick<Bookmark, 'title' | 'description' | 'links' | 'tags'>,
) {
  const db = getFirestore();
  const bookmarksCollection = collection(db, Collections.BOOKMARKS);
  const now = new Date().getTime();
  const newBookmark = {
    title: bookmark.title,
    description: bookmark.description,
    links: bookmark.links.map((link) => link.trim()).filter((link) => link),
    tags: bookmark.tags,
    createdAt: now,
    updatedAt: now,
  };
  const { id } = await addDoc(bookmarksCollection, newBookmark);

  return { ...newBookmark, id };
}

export async function deleteBookmark(id: Bookmark['id']) {
  const db = getFirestore();
  try {
    await deleteDoc(doc(db, Collections.BOOKMARKS, id));
    return true;
  } catch {
    return false;
  }
}
