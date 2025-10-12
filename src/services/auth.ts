import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

async function createUserAccount(email: string, password: string) {
  const auth = getAuth();
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  return userCredentials.user;
}

async function createGoogleAccount() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userCredentials = await signInWithPopup(auth, provider);
  return userCredentials.user;
}

export const authService = {
  createUserAccount,
  createGoogleAccount,
};
