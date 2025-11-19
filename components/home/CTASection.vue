<template>
  <section class="py-20 gradient-corporate text-white relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and take the first step towards success
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="white"
            size="lg"
            as="NuxtLink"
            to="/contact"
          >
            Get Started Now
            <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline-white"
            size="lg"
            as="NuxtLink"
            to="/services"
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
