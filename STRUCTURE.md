# Vue 3 + TypeScript + Pinia - Best Practices Structure

Proyek ini mengikuti struktur folder best practices untuk Vue 3 dengan TypeScript dan Pinia untuk state management.

## 📁 Struktur Folder

```
src/
├── assets/                 # Asset statis (CSS, gambar, dll)
├── components/            # Komponen Vue
│   ├── ui/               # Komponen UI dasar (Button, Input, dll)
│   ├── common/           # Komponen umum yang dapat digunakan ulang
│   └── icons/            # Komponen ikon
├── composables/          # Vue Composables (logika yang dapat digunakan ulang)
├── constants/            # Konstanta aplikasi
├── layouts/              # Layout komponen
├── router/               # Konfigurasi Vue Router
├── services/             # Service layer (API calls, dll)
├── stores/               # Pinia stores (state management)
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── views/                # Halaman/View components
```

## 🏗️ Penjelasan Struktur

### `/components`

- **`ui/`**: Komponen UI dasar seperti Button, Input, Modal, dll. Komponen ini umumnya tidak memiliki logika bisnis
- **`common/`**: Komponen yang dapat digunakan ulang di berbagai bagian aplikasi
- **`icons/`**: Komponen ikon SVG

### `/composables`

- Berisi Vue Composables - fungsi yang menggunakan Composition API untuk logika yang dapat digunakan ulang
- Contoh: `useApi.ts`, `useLocalStorage.ts`, `useCounter.ts`

### `/constants`

- Konstanta aplikasi seperti API endpoints, konfigurasi, dll
- Membantu menghindari hardcoding nilai-nilai penting

### `/layouts`

- Template layout yang dapat digunakan ulang
- Contoh: `AppLayout.vue` untuk layout utama

### `/services`

- Service layer untuk komunikasi dengan API
- Abstraksi untuk HTTP requests dan logika bisnis

### `/stores`

- Pinia stores untuk state management
- Setiap store mengelola bagian spesifik dari state aplikasi

### `/types`

- TypeScript type definitions dan interfaces
- Membantu type safety di seluruh aplikasi

### `/utils`

- Utility functions dan helper functions
- Contoh: validasi, formatting, manipulasi data

### `/views`

- Komponen halaman yang terkait dengan routing
- Setiap view mewakili satu halaman dalam aplikasi

## 🚀 Pinia Setup

Pinia telah dikonfigurasi sebagai state management solution:

### Store Example

```typescript
// stores/counter.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
```

### Penggunaan dalam Komponen

```vue
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>
```

## 🛠️ Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## 📝 Best Practices

1. **Komponen**: Gunakan `<script setup>` dengan TypeScript
2. **State Management**: Gunakan Pinia untuk state global
3. **Composables**: Ekstrak logika yang dapat digunakan ulang
4. **Types**: Definisikan types untuk semua data structures
5. **Services**: Pisahkan logika API dari komponen
6. **Constants**: Hindari hardcoding, gunakan constants
7. **Utils**: Buat utility functions untuk operasi umum

## 🎯 Fitur

- ✅ Vue 3 dengan Composition API
- ✅ TypeScript untuk type safety
- ✅ Pinia untuk state management
- ✅ Vue Router untuk routing
- ✅ Tailwind CSS untuk styling
- ✅ Struktur folder yang terorganisir
- ✅ Composables untuk logika reusable
- ✅ Service layer untuk API calls
- ✅ Utility functions
- ✅ Type definitions

## 📚 Dokumentasi

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
