<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Animated Background -->
    <div class="absolute inset-0 gradient-animated opacity-20"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-950/50 dark:to-gray-950"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
          class="space-y-8"
        >
          <div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span class="gradient-text">Innovative Solutions</span>
              <br />
              for Modern Businesses
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              We help companies navigate the digital landscape with cutting-edge solutions tailored to their unique needs.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" as="NuxtLink" to="/contact">
                Get Started
                <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" as="NuxtLink" to="/services">
                Explore Services
              </Button>
            </div>
          </div>

          <!-- Trust Badges -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="400"
            class="flex items-center gap-8"
          >
            <div class="flex -space-x-4">
              <div
                v-for="i in 4"
                :key="i"
                class="w-12 h-12 rounded-full border-4 border-white dark:border-gray-950 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold"
              >
                {{ String.fromCharCode(64 + i) }}
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-bold text-2xl gradient-text">500+</span>
                <br />
                businesses trust us
              </p>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800"
          :delay="200"
          class="relative"
        >
          <div class="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-float">
            <NuxtImg
              src="/images/hero.png"
              alt="Modern business team collaborating with technology"
              class="w-full h-full object-cover"
              loading="eager"
              quality="90"
            />
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
          </div>
          
          <!-- Floating Stats Card -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="600"
            class="absolute -bottom-8 -left-8 glass dark:glass-dark p-6 rounded-xl shadow-2xl"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <Icon name="heroicons:chart-bar" class="h-6 w-6 text-white" />
              </div>
              <div>
                <p class="text-2xl font-bold gradient-text">98%</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
