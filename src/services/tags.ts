import { addDoc, collection, deleteDoc, getDocs, getFirestore, doc } from 'firebase/firestore';
import { Collections } from '@/config/firebase';
import { generateRandomTagColor } from '@/utils/tags';
import type { Tag } from '@/declarations/Tag';

export async function getTags() {
  const db = getFirestore();
  const tagsCollection = collection(db, Collections.TAGS);
  const snapshot = await getDocs(tagsCollection);
  const documents: Tag[] = [];
  snapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() } as Tag);
  });
  return documents;
}

export async function createTag(name: Tag['name']) {
  const db = getFirestore();
  const tagsCollection = collection(db, Collections.TAGS);
  const now = new Date().getTime();
  const newTag = {
    name,
    createdAt: now,
    updatedAt: now,
    color: generateRandomTagColor(),
  };
  const { id } = await addDoc(tagsCollection, newTag);

  return { ...newTag, id };
}

export async function deleteTag(id: Tag['id']) {
  const db = getFirestore();
  try {
    await deleteDoc(doc(db, Collections.TAGS, id));
    return true;
  } catch {
    return false;
  }
}
