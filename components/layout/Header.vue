<template>
  <header
    :class="headerClasses"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-4">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <span class="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
            VisoNext
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            :class="linkClasses(item.href)"
            class="text-sm font-medium transition-colors relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
          </NuxtLink>
          <Button variant="gradient" size="sm" as="NuxtLink" to="/contact">
            Get Started
          </Button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 glass dark:glass-dark border-t border-white/20 shadow-2xl"
      >
        <nav class="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            :class="linkClasses(item.href)"
            class="text-lg font-medium py-2 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
          <Button variant="gradient" class="w-full" as="NuxtLink" to="/contact" @click="mobileMenuOpen = false">
            Get Started
          </Button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 10)

const headerClasses = computed(() => {
  return isScrolled.value
    ? 'glass dark:glass-dark shadow-lg'
    : 'bg-transparent'
})

const linkClasses = (href: string) => {
  return route.path === href
    ? 'text-primary-600'
    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
