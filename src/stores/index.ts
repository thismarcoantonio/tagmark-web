import { createPinia, type Pinia, type Store } from 'pinia';

const pinia = createPinia();

interface ExtendedPinia extends Pinia {
  _s: Map<string, Store>;
}

export function resetStores() {
  (pinia as ExtendedPinia)._s.forEach((store) => store.$reset());
  window.localStorage.clear();
}

export default pinia;
