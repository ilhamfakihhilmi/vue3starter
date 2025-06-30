<template>
    <div class="max-w-4xl mx-auto p-6">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">
                🎯 Vue 3 + Pinia Demo
            </h1>

            <!-- Counter Demo -->
            <div class="mb-12">
                <h2 class="text-2xl font-semibold mb-6 text-indigo-600">
                    📊 Counter Store Demo
                </h2>
                <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                    <div class="text-center mb-6">
                        <div class="text-6xl font-bold text-indigo-600 mb-2">
                            {{ counterStore.count }}
                        </div>
                        <div class="text-lg text-gray-600">Current Count</div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-white rounded-lg p-4 shadow">
                            <div class="text-2xl font-semibold text-blue-600">
                                {{ counterStore.doubleCount }}
                            </div>
                            <div class="text-sm text-blue-700">Double Count</div>
                        </div>
                        <div class="bg-white rounded-lg p-4 shadow">
                            <div class="text-2xl font-semibold"
                                :class="counterStore.isEven ? 'text-green-600' : 'text-orange-600'">
                                {{ counterStore.isEven ? 'Even ✅' : 'Odd ⚠️' }}
                            </div>
                            <div class="text-sm text-gray-700">Number Type</div>
                        </div>
                    </div>

                    <div class="flex justify-center space-x-4">
                        <button @click="counterStore.decrement"
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                            ➖ Decrease
                        </button>
                        <button @click="counterStore.reset"
                            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                            🔄 Reset
                        </button>
                        <button @click="counterStore.increment"
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                            ➕ Increase
                        </button>
                    </div>
                </div>
            </div>

            <!-- User Store Demo -->
            <div class="mb-12">
                <h2 class="text-2xl font-semibold mb-6 text-green-600">
                    👤 User Store Demo
                </h2>
                <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <div v-if="!userStore.isAuthenticated" class="text-center">
                        <div class="mb-4">
                            <div class="text-lg text-gray-600 mb-4">Not authenticated</div>
                        </div>
                        <button @click="simulateLogin" :disabled="userStore.loading"
                            class="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                            {{ userStore.loading ? '⏳ Logging in...' : '🔐 Simulate Login' }}
                        </button>
                    </div>

                    <div v-else class="text-center">
                        <div class="bg-white rounded-lg p-4 shadow mb-4">
                            <div class="text-xl font-semibold text-green-600 mb-2">
                                Welcome, {{ userStore.user?.name }}!
                            </div>
                            <div class="text-gray-600">{{ userStore.user?.email }}</div>
                        </div>
                        <button @click="userStore.logout"
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                            🚪 Logout
                        </button>
                    </div>
                </div>
            </div>

            <!-- Settings Demo -->
            <div class="mb-12">
                <h2 class="text-2xl font-semibold mb-6 text-purple-600">
                    ⚙️ Settings Demo
                </h2>
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white rounded-lg p-4 shadow">
                            <h3 class="font-semibold mb-3">Settings</h3>
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Theme</label>
                                    <select v-model="localTheme"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="auto">Auto</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1">Language</label>
                                    <select v-model="localLanguage"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md">
                                        <option value="en">English</option>
                                        <option value="id">Indonesian</option>
                                        <option value="es">Spanish</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg p-4 shadow">
                            <h3 class="font-semibold mb-3">Current Settings</h3>
                            <div class="space-y-2 text-sm">
                                <div><strong>Theme:</strong> {{ localTheme }}</div>
                                <div><strong>Language:</strong> {{ localLanguage }}</div>
                            </div>
                            <button @click="resetSettings"
                                class="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-1 px-3 rounded transition-colors">
                                � Reset Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- API Demo -->
            <div>
                <h2 class="text-2xl font-semibold mb-6 text-orange-600">
                    🌐 API Composable Demo
                </h2>
                <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                    <div class="text-center">
                        <button @click="fetchData" :disabled="apiData.loading.value"
                            class="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-2 px-6 rounded-lg transition-colors mb-4">
                            {{ apiData.loading.value ? '⏳ Loading...' : '📡 Fetch Mock Data' }}
                        </button>

                        <div v-if="apiData.error.value" class="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                            ❌ Error: {{ apiData.error.value }}
                        </div>

                        <div v-if="apiData.data.value" class="bg-white rounded-lg p-4 shadow">
                            <h3 class="font-semibold mb-2">Mock API Response:</h3>
                            <pre
                                class="text-left text-sm bg-gray-100 p-3 rounded overflow-auto">{{ JSON.stringify(apiData.data.value, null, 2) }}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '../composables/useApi'
import { useCounterStore } from '../stores/counter'
import { useUserStore } from '../stores/user'

// Stores
const counterStore = useCounterStore()
const userStore = useUserStore()

// Local reactive data
const localTheme = ref('light')
const localLanguage = ref('en')

// API composable
const mockApiCall = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate random success/failure
    if (Math.random() > 0.3) {
        return {
            success: true,
            data: {
                id: Math.floor(Math.random() * 1000),
                name: 'Mock User',
                email: 'mock@example.com',
                timestamp: new Date().toISOString(),
                randomData: Math.random()
            }
        }
    } else {
        throw new Error('Simulated API error')
    }
}

const apiData = useApi(mockApiCall)

// Methods
const simulateLogin = async () => {
    await userStore.login('demo@example.com', 'password123')
}

const fetchData = () => {
    apiData.execute()
}

const resetSettings = () => {
    localTheme.value = 'light'
    localLanguage.value = 'en'
}
</script>
