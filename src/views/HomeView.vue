<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import TheWelcome from '../components/TheWelcome.vue';
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 py-6">
                <div class="flex items-center justify-center lg:justify-start">
                    <img alt="Vue logo" class="w-16 h-16 lg:w-20 lg:h-20 mr-0 lg:mr-8" src="../assets/logo.svg" />
                    <div class="hidden lg:block">
                        <HelloWorld msg="Welcome to Vue 3 + TypeScript + Tailwind!" />
                    </div>
                </div>
                <div class="lg:hidden mt-4">
                    <HelloWorld msg="Welcome to Vue 3 + TypeScript + Tailwind!" />
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 py-8">
            <TheWelcome />
        </main>
    </div>
</template>
