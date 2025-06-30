<template>
    <div class="space-y-2">
        <label v-if="label" :for="id"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>
        <input :id="id" :type="type" :placeholder="placeholder" :required="required" :disabled="disabled" :class="[
            'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            error ? 'border-red-500 focus-visible:ring-red-500' : '',
            className
        ]" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            v-bind="$attrs" />
        <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
        <p v-else-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    id?: string
    label?: string
    type?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    error?: string
    description?: string
    className?: string
    modelValue?: string | number
}

withDefaults(defineProps<Props>(), {
    type: 'text',
    required: false,
    disabled: false,
    className: ''
})

defineEmits<{
    'update:modelValue': [value: string]
}>()
</script>
