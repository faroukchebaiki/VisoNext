<template>
  <div
    :class="cardClasses"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="delay"
  >
    <div v-if="$slots.header || title" class="p-6 pb-4">
      <slot name="header">
        <h3 v-if="title" class="text-xl font-semibold">{{ title }}</h3>
        <p v-if="description" class="text-sm text-muted-foreground mt-1">{{ description }}</p>
      </slot>
    </div>
    
    <div class="p-6 pt-0">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="p-6 pt-0 border-t border-border/50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'glass' | 'gradient'
  hover?: boolean
  title?: string
  description?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: true,
  delay: 0
})

const cardClasses = computed(() => {
  const base = 'rounded-xl overflow-hidden transition-smooth'
  
  const variants = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md',
    glass: 'glass dark:glass-dark shadow-xl',
    gradient: 'gradient-corporate text-white shadow-2xl'
  }
  
  const hoverEffect = props.hover ? 'hover-lift hover:shadow-2xl' : ''
  
  return [base, variants[props.variant], hoverEffect]
})
</script>
