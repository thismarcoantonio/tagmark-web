import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

async function createUserAccount(email: string, password: string) {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export const authService = {
  createUserAccount,
};
