<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <router-link to="/" class="text-xl font-bold text-gray-900">
                            Vue Mastering
                        </router-link>
                    </div>

                    <!-- Navigation -->
                    <nav class="hidden md:flex space-x-8">
                        <router-link to="/"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-indigo-600 bg-indigo-50">
                            Home
                        </router-link>
                        <router-link to="/about"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-indigo-600 bg-indigo-50">
                            About
                        </router-link>
                    </nav>

                    <!-- User menu -->
                    <div v-if="userStore.isAuthenticated" class="flex items-center space-x-4">
                        <span class="text-sm text-gray-700">
                            Hello, {{ userStore.user?.name }}
                        </span>
                        <button @click="handleLogout" class="text-sm text-red-600 hover:text-red-700">
                            Logout
                        </button>
                    </div>
                    <div v-else>
                        <button class="text-sm text-indigo-600 hover:text-indigo-700">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main content -->
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t mt-auto">
            <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-gray-500">
                    © 2025 Vue Mastering App. Built with Vue 3 + TypeScript + Tailwind CSS.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleLogout = () => {
    userStore.logout()
}
</script>
