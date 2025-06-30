import { onMounted, onUnmounted, ref } from "vue";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const storedValue = ref<T>(defaultValue);

  const read = () => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        storedValue.value = JSON.parse(item);
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  };

  const write = (value: T) => {
    try {
      storedValue.value = value;
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      storedValue.value = defaultValue;
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  // Handle storage events from other tabs
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === key && e.newValue) {
      try {
        storedValue.value = JSON.parse(e.newValue);
      } catch (error) {
        console.error(
          `Error parsing localStorage value for key "${key}":`,
          error
        );
      }
    }
  };

  onMounted(() => {
    read();
    window.addEventListener("storage", handleStorageChange);
  });

  onUnmounted(() => {
    window.removeEventListener("storage", handleStorageChange);
  });

  return {
    value: storedValue,
    write,
    remove,
  };
}
