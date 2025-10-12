import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { emulatorConfig, firebaseConfig } from '@/config/firebase';

export function setupFirebase() {
  const app = initializeApp(firebaseConfig);

  if (import.meta.env.DEV) {
    // Setup auth emulators
    const auth = getAuth();
    connectAuthEmulator(auth, emulatorConfig.auth);

    // Setup firestore emulators
    const db = getFirestore();
    const [firestoreUrl, firestorePort] = emulatorConfig.firestore.split(':');
    connectFirestoreEmulator(db, firestoreUrl, Number(firestorePort));
  }

  return app;
}
