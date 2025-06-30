<template>
    <div class="max-w-2xl mx-auto p-6">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">
                Counter with Pinia
            </h1>

            <div class="text-center space-y-6">
                <!-- Counter Display -->
                <div class="bg-gray-50 rounded-lg p-6">
                    <div class="text-6xl font-bold text-indigo-600 mb-2">
                        {{ counterStore.count }}
                    </div>
                    <div class="text-lg text-gray-600">
                        Current Count
                    </div>
                </div>

                <!-- Counter Info -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-blue-50 rounded-lg p-4">
                        <div class="text-2xl font-semibold text-blue-600">
                            {{ counterStore.doubleCount }}
                        </div>
                        <div class="text-sm text-blue-700">Double Count</div>
                    </div>
                    <div class="bg-green-50 rounded-lg p-4">
                        <div class="text-2xl font-semibold text-green-600">
                            {{ counterStore.isEven ? 'Even' : 'Odd' }}
                        </div>
                        <div class="text-sm text-green-700">Number Type</div>
                    </div>
                </div>

                <!-- Controls -->
                <div class="flex justify-center space-x-4">
                    <button @click="counterStore.decrement"
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        - Decrease
                    </button>
                    <button @click="counterStore.reset"
                        class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Reset
                    </button>
                    <button @click="counterStore.increment"
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        + Increase
                    </button>
                </div>

                <!-- Custom Value Input -->
                <div class="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 class="text-lg font-semibold mb-4">Set Custom Value</h3>
                    <div class="flex justify-center items-center space-x-4">
                        <input v-model.number="customValue" type="number" placeholder="Enter number"
                            class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <button @click="setCustomValue"
                            class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                            Set Value
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
const customValue = ref<number>(0)

const setCustomValue = () => {
    if (customValue.value !== null && !isNaN(customValue.value)) {
        counterStore.setCount(customValue.value)
        customValue.value = 0
    }
}
</script>
