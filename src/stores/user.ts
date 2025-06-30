import { defineStore } from "pinia";
import { ref } from "vue";

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export const useUserStore = defineStore("user", () => {
  // State
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const loading = ref(false);

  // Actions
  async function login(email: string, password: string) {
    loading.value = true;
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      user.value = {
        id: 1,
        name: "John Doe",
        email: email,
      };
      isAuthenticated.value = true;

      return { success: true };
    } catch (error) {
      return { success: false, error: "Login failed" };
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    user.value = null;
    isAuthenticated.value = false;
  }

  function updateUser(userData: Partial<User>) {
    if (user.value) {
      user.value = { ...user.value, ...userData };
    }
  }

  return {
    // State
    user,
    isAuthenticated,
    loading,
    // Actions
    login,
    logout,
    updateUser,
  };
});
