<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
      >
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Our <span class="gradient-text">Services</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Comprehensive solutions tailored to meet your business needs
          </p>
        </div>
        <Button variant="outline" class="mt-4 md:mt-0" as="NuxtLink" to="/services">
          View All Services
          <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="index * 150"
          class="group"
        >
          <div class="rounded-2xl overflow-hidden shadow-xl hover-lift transition-smooth">
            <!-- Image -->
            <div class="relative h-64 overflow-hidden">
              <NuxtImg
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="p-6 bg-white dark:bg-gray-900">
              <h3 class="text-2xl font-semibold mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ service.description }}</p>
              <Button variant="ghost" size="sm" as="NuxtLink" to="/services">
                Learn More
                <Icon name="heroicons:arrow-right" class="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your operations and drive growth.',
    image: '/images/service-consulting.png'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge digital solutions.',
    image: '/images/service-digital.png'
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights for better decision making.',
    image: '/images/service-analytics.png'
  }
]
</script>
