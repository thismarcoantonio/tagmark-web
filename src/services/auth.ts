import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

async function checkUserAuth() {
  const auth = getAuth();
  return new Promise<User | false>((resolve, reject) =>
    onAuthStateChanged(auth, (user) => resolve(user ?? false), reject),
  );
}

async function createUserAccount(email: string, password: string) {
  const auth = getAuth();
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  return userCredentials.user;
}

async function createOrLoginWithGoogleAccount() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userCredentials = await signInWithPopup(auth, provider);
  return userCredentials.user;
}

async function loginUserAccount(email: string, password: string) {
  const auth = getAuth();
  const userCredentials = await signInWithEmailAndPassword(auth, email, password);
  return userCredentials.user;
}

export const authService = {
  checkUserAuth,
  createUserAccount,
  createOrLoginWithGoogleAccount,
  loginUserAccount,
};
