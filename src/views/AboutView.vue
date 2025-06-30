<script setup lang="ts">
// This is the About page
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 py-16">
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">
                    About This Project
                </h1>

                <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 text-lg leading-relaxed mb-6">
                        This is a modern Vue.js application built with the latest technologies:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-green-50 p-6 rounded-lg">
                            <h3 class="text-xl font-semibold text-green-800 mb-3">
                                🚀 Vue 3
                            </h3>
                            <p class="text-green-700">
                                The latest version of Vue.js with Composition API, better performance, and improved
                                TypeScript support.
                            </p>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-lg">
                            <h3 class="text-xl font-semibold text-blue-800 mb-3">
                                📘 TypeScript
                            </h3>
                            <p class="text-blue-700">
                                Static type checking for better code quality, IDE support, and fewer runtime errors.
                            </p>
                        </div>

                        <div class="bg-cyan-50 p-6 rounded-lg">
                            <h3 class="text-xl font-semibold text-cyan-800 mb-3">
                                🎨 Tailwind CSS
                            </h3>
                            <p class="text-cyan-700">
                                Utility-first CSS framework for rapid UI development with consistent design.
                            </p>
                        </div>

                        <div class="bg-purple-50 p-6 rounded-lg">
                            <h3 class="text-xl font-semibold text-purple-800 mb-3">
                                🛣️ Vue Router
                            </h3>
                            <p class="text-purple-700">
                                Official router for Vue.js with nested routes, guards, and smooth navigation.
                            </p>
                        </div>
                    </div>

                    <div class="text-center">
                        <router-link to="/"
                            class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                            ← Back to Home
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
