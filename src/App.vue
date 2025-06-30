<script setup lang="ts">
// Router will handle the views
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-4">
            <img alt="Vue logo" class="w-8 h-8" src="./assets/logo.svg" />
            <h1 class="text-xl font-bold text-gray-900">
              Vue 3 + TypeScript + Tailwind
            </h1>
          </div>

          <div class="flex space-x-4">
            <router-link to="/"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
              active-class="text-green-600 bg-green-50">
              Home
            </router-link>
            <router-link to="/about"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
              active-class="text-green-600 bg-green-50">
              About
            </router-link>
            <router-link to="/counter"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
              active-class="text-green-600 bg-green-50">
              Counter
            </router-link>
            <router-link to="/demo"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
              active-class="text-green-600 bg-green-50">
              Demo
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view />
  </div>
</template>
