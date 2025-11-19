<template>
  <footer class="gradient-purple-blue text-white">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div>
          <h3 class="text-2xl font-bold mb-4">VisoNext</h3>
          <p class="text-white/80 mb-6">
            Innovative solutions for modern businesses. Transform your business with cutting-edge technology.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Twitter">
              <Icon name="mdi:twitter" class="h-5 w-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Icon name="mdi:linkedin" class="h-5 w-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="GitHub">
              <Icon name="mdi:github" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.href">
              <NuxtLink :to="link.href" class="text-white/80 hover:text-white transition-colors">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <a href="#" class="text-white/80 hover:text-white transition-colors">
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
          <ul class="space-y-3 text-white/80">
            <li class="flex items-start">
              <Icon name="heroicons:envelope" class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>info@visonext.com</span>
            </li>
            <li class="flex items-start">
              <Icon name="heroicons:phone" class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li class="flex items-start">
              <Icon name="heroicons:map-pin" class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>123 Business Ave, Tech City, TC 12345</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-white/80 text-sm mb-4 md:mb-0">
          © {{ currentYear }} VisoNext Corporation. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm">
          <a href="#" class="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="text-white/80 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="text-white/80 hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  'Business Consulting',
  'Digital Transformation',
  'Data Analytics',
  'Cloud Solutions'
]
</script>
