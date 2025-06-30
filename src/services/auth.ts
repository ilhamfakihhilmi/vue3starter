import type { ApiResponse, LoginCredentials, User } from "@/types";
import { apiService } from "./api";

export class AuthService {
  async login(
    credentials: LoginCredentials
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    try {
      const response = await apiService.post<{ user: User; token: string }>(
        "/auth/login",
        credentials
      );

      if (response.success && response.data) {
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Login failed");
    }
  }

  async logout(): Promise<void> {
    try {
      await apiService.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    }
  }

  async getProfile(): Promise<ApiResponse<User>> {
    return apiService.get<User>("/auth/profile");
  }

  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    const response = await apiService.post<{ token: string }>("/auth/refresh");

    if (response.success && response.data) {
      localStorage.setItem("access_token", response.data.token);
    }

    return response;
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }

  getStoredToken(): string | null {
    return localStorage.getItem("access_token");
  }

  isAuthenticated(): boolean {
    return !!this.getStoredToken();
  }
}

export const authService = new AuthService();
