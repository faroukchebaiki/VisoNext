<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Why Choose <span class="gradient-text">VisoNext</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We deliver exceptional value through our comprehensive suite of services
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          v-for="(feature, index) in features"
          :key="index"
          variant="glass"
          :delay="index * 100"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 rounded-2xl gradient-corporate flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform"
            >
              <Icon :name="feature.icon" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Data-Driven',
    description: 'Make informed decisions with our advanced analytics and reporting tools.',
    icon: 'heroicons:chart-bar'
  },
  {
    title: 'Fast & Efficient',
    description: 'Streamlined processes that save you time and increase productivity.',
    icon: 'heroicons:bolt'
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security to protect your valuable business data.',
    icon: 'heroicons:shield-check'
  },
  {
    title: 'Expert Support',
    description: 'Dedicated team of professionals ready to assist you at every step.',
    icon: 'heroicons:users'
  }
]
</script>
