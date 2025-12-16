import { ref, watch } from 'vue';

function storageGet(key: string) {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function storageSet<ValueType>(key: string, value: ValueType) {
  window.localStorage.setItem(key, JSON.stringify(value ?? ''));
}

export function useStorage<ValueType>(key: string, defaultValue: ValueType) {
  const storage = ref<ValueType>(storageGet(key) ?? defaultValue);

  watch(
    () => storage.value,
    (newValue) => storageSet(key, newValue),
    { deep: true },
  );

  return storage;
}
