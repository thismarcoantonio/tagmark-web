export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MS_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const emulatorConfig = {
  auth: 'http://127.0.0.1:9099',
  firestore: '127.0.0.1:8080',
};

export enum Collections {
  TAGS = 'tags',
}
