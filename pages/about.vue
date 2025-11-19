<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0 gradient-animated opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-center max-w-4xl mx-auto"
        >
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            About <span class="gradient-text">VisoNext</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We're on a mission to transform businesses through innovative technology solutions and expert consulting.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
          >
            <h2 class="text-4xl font-bold mb-6">Our Mission</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
              At VisoNext, we believe in empowering businesses to reach their full potential through cutting-edge technology and strategic guidance. Our mission is to deliver innovative solutions that drive growth, efficiency, and success.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              With over 15 years of experience, we've helped more than 500 businesses transform their operations and achieve remarkable results.
            </p>
          </div>
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            class="grid grid-cols-2 gap-6"
          >
            <Card
              v-for="(value, index) in values"
              :key="index"
              variant="glass"
              :delay="index * 100"
            >
              <div class="text-center">
                <div class="w-12 h-12 rounded-full gradient-corporate flex items-center justify-center mx-auto mb-4">
                  <Icon :name="value.icon" class="h-6 w-6 text-white" />
                </div>
                <h3 class="font-semibold mb-2">{{ value.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ value.description }}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-center mb-16"
        >
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span class="gradient-text">Team</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dedicated professionals committed to your success
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            v-for="(member, index) in team"
            :key="index"
            :delay="index * 100"
          >
            <div class="text-center">
              <div class="w-24 h-24 rounded-full gradient-corporate flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                {{ member.initials }}
              </div>
              <h3 class="text-xl font-semibold mb-1">{{ member.name }}</h3>
              <p class="text-primary-600 mb-3">{{ member.role }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ member.bio }}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Us | Learn About VisoNext Corporation',
  description: 'Learn about VisoNext Corporation\'s mission, values, and team. We\'re dedicated to transforming businesses through innovative technology solutions.',
  ogTitle: 'About VisoNext Corporation',
  ogDescription: 'Learn about our mission to transform businesses through innovative technology solutions.',
  ogImage: '/images/hero.png'
})

const values = [
  {
    title: 'Innovation',
    description: 'Cutting-edge solutions',
    icon: 'heroicons:light-bulb'
  },
  {
    title: 'Excellence',
    description: 'Quality in everything',
    icon: 'heroicons:star'
  },
  {
    title: 'Integrity',
    description: 'Honest and transparent',
    icon: 'heroicons:shield-check'
  },
  {
    title: 'Partnership',
    description: 'Your success is ours',
    icon: 'heroicons:users'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    initials: 'SJ',
    bio: 'Visionary leader with 20+ years in technology and business transformation.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    initials: 'MC',
    bio: 'Tech innovator specializing in digital transformation and cloud solutions.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Head of Consulting',
    initials: 'ER',
    bio: 'Strategic consultant helping businesses optimize operations and drive growth.'
  }
]
</script>
