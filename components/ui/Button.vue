<template>
  <component
    :is="as"
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <Icon v-if="loading" name="svg-spinners:ring-resize" class="mr-2 h-4 w-4" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'white' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  as?: string
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button',
  disabled: false,
  loading: false
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium transition-smooth rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950',
    ghost: 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950',
    gradient: 'gradient-corporate text-white shadow-lg hover:shadow-2xl hover-lift',
    white: 'bg-white text-primary-900 hover:bg-gray-50 shadow-lg hover:shadow-xl',
    'outline-white': 'border-2 border-white/30 text-white hover:bg-white/10'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return [base, variants[props.variant], sizes[props.size]]
})
</script>
