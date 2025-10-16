import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
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
  const doc = await addDoc(tagsCollection, {
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
    color: generateRandomTagColor(),
  });
  return doc.toJSON();
}
