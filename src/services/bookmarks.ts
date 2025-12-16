import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  doc,
  query,
  where,
  getDoc,
} from 'firebase/firestore';
import { Collections } from '@/config/firebase';
import type { Bookmark } from '@/declarations/Bookmark';

export async function getBookmarks(userId: string) {
  const db = getFirestore();
  const bookmarksCollection = collection(db, Collections.BOOKMARKS);
  const dataQuery = query(bookmarksCollection, where('userId', '==', userId));
  const snapshot = await getDocs(dataQuery);
  const documents: Bookmark[] = [];
  snapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() } as Bookmark);
  });
  return documents;
}

export async function createBookmark(
  bookmark: Pick<Bookmark, 'title' | 'description' | 'links' | 'tags'>,
  userId: string,
) {
  const db = getFirestore();
  const bookmarksCollection = collection(db, Collections.BOOKMARKS);
  const now = new Date().getTime();
  const newBookmark = {
    userId,
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

export async function deleteBookmark(id: Bookmark['id'], userId: string) {
  const db = getFirestore();
  const bookmarkRef = doc(db, Collections.BOOKMARKS, id);
  const bookmarkSnap = await getDoc(bookmarkRef);

  if (!bookmarkSnap.exists() || bookmarkSnap.data().userId !== userId) return;

  try {
    await deleteDoc(doc(db, Collections.BOOKMARKS, id));
    return true;
  } catch {
    return false;
  }
}
