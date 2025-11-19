<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | VisoNext Corporation` : 'VisoNext Corporation | Innovative Solutions for Modern Businesses'
  }
})
</script>
