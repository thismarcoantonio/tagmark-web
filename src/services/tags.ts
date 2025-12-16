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
import { generateRandomTagColor } from '@/utils/tags';
import type { Tag } from '@/declarations/Tag';

export async function getTags(userId: string) {
  const db = getFirestore();
  const tagsCollection = collection(db, Collections.TAGS);
  const dataQuery = query(tagsCollection, where('userId', '==', userId));
  const snapshot = await getDocs(dataQuery);
  const documents: Tag[] = [];
  snapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() } as Tag);
  });
  return documents;
}

export async function createTag(name: Tag['name'], userId: string) {
  const db = getFirestore();
  const tagsCollection = collection(db, Collections.TAGS);
  const now = new Date().getTime();
  const newTag = {
    userId,
    name,
    createdAt: now,
    updatedAt: now,
    color: generateRandomTagColor(),
  };
  const { id } = await addDoc(tagsCollection, newTag);

  return { ...newTag, id };
}

export async function deleteTag(id: Tag['id'], userId: string) {
  const db = getFirestore();
  const tagsRef = doc(db, Collections.TAGS, id);
  const tagsSnap = await getDoc(tagsRef);

  if (!tagsSnap.exists() || tagsSnap.data().userId !== userId) return;

  try {
    await deleteDoc(doc(db, Collections.TAGS, id));
    return true;
  } catch {
    return false;
  }
}
