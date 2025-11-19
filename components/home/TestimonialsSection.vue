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
          What Our <span class="gradient-text">Clients Say</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :delay="index * 100"
        >
          <div>
            <!-- Stars -->
            <div class="flex mb-4">
              <Icon
                v-for="i in 5"
                :key="i"
                name="heroicons:star-solid"
                class="h-5 w-5 text-yellow-400"
              />
            </div>

            <!-- Quote -->
            <p class="text-gray-700 dark:text-gray-300 mb-6 italic">
              "{{ testimonial.quote }}"
            </p>

            <!-- Author -->
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full gradient-purple-blue flex items-center justify-center text-white font-bold mr-4">
                {{ testimonial.initials }}
              </div>
              <div>
                <p class="font-semibold">{{ testimonial.author }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'VisoNext transformed our business operations, resulting in a 30% increase in efficiency and significant cost savings.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    initials: 'SJ'
  },
  {
    quote: 'The team at VisoNext provided exceptional service and innovative solutions that helped us scale our business rapidly.',
    author: 'Michael Chen',
    role: 'CTO, GrowthWave',
    initials: 'MC'
  },
  {
    quote: 'Working with VisoNext has been a game-changer for our company. Their expertise and dedication are unmatched in the industry.',
    author: 'Emma Rodriguez',
    role: 'Operations Director, Elevate Group',
    initials: 'ER'
  }
]
</script>
