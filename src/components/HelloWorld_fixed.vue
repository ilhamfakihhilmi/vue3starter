<script setup lang="ts">
interface Props {
    msg: string
}

defineProps<Props>()
</script>

<template>
    <div class="text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold text-green-600 mb-4">
            {{ msg }}
        </h1>
        <h3 class="text-lg lg:text-xl text-gray-700">
            You've successfully created a project with
            <a href="https://vite.dev/" target="_blank" rel="noopener"
                class="text-green-600 hover:text-green-700 underline transition-colors">
                Vite
            </a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener"
                class="text-green-600 hover:text-green-700 underline transition-colors">
                Vue 3
            </a> +
            <span class="font-semibold text-blue-600">TypeScript</span> +
            <span class="font-semibold text-cyan-600">Tailwind CSS</span> +
            <span class="font-semibold text-purple-600">Vue Router</span>.
        </h3>
    </div>
</template>
