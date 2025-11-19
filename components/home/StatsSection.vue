<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :visible="{ opacity: 1, scale: 1 }"
          :delay="index * 100"
          class="p-6"
        >
          <p class="text-5xl md:text-6xl font-bold gradient-text mb-2">
            {{ stat.value }}
          </p>
          <p class="text-gray-600 dark:text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years of Experience' },
  { value: '50+', label: 'Industry Experts' }
]
</script>
