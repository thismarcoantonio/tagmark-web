import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  type User,
} from 'firebase/auth';

async function checkUserAuth() {
  const auth = getAuth();
  return new Promise<User | false>((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        resolve(user ?? false);
        unsubscribe();
      },
      reject,
    );
  });
}

async function createOrLoginWithGoogleAccount() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userCredentials = await signInWithPopup(auth, provider);
  return userCredentials.user;
}

async function createUserAccount(email: string, password: string) {
  const auth = getAuth();
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  return userCredentials.user;
}

async function loginUserAccount(email: string, password: string) {
  const auth = getAuth();
  const userCredentials = await signInWithEmailAndPassword(auth, email, password);
  return userCredentials.user;
}

async function logout() {
  const auth = getAuth();
  return signOut(auth);
}

export const authService = {
  checkUserAuth,
  createUserAccount,
  createOrLoginWithGoogleAccount,
  loginUserAccount,
  logout,
};
