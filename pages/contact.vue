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
            Get in <span class="gradient-text">Touch</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Ready to transform your business? Contact us today for a free consultation
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <Card variant="glass">
            <h2 class="text-3xl font-bold mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label for="company" class="block text-sm font-medium mb-2">Company</label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label for="service" class="block text-sm font-medium mb-2">Service Interested In</label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
                >
                  <option value="">Select a service</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="analytics">Data Analytics</option>
                  <option value="cloud">Cloud Solutions</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                class="w-full"
                :loading="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                <Icon v-if="!isSubmitting" name="heroicons:paper-airplane" class="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          <!-- Contact Info -->
          <div class="space-y-8">
            <Card
              v-for="(info, index) in contactInfo"
              :key="index"
              variant="glass"
              :delay="index * 100"
            >
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg gradient-purple-blue flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon :name="info.icon" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ info.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ info.content }}</p>
                  <p v-if="info.extra" class="text-gray-600 dark:text-gray-400 mt-1">{{ info.extra }}</p>
                </div>
              </div>
            </Card>

            <!-- Business Hours -->
            <Card variant="gradient">
              <h3 class="text-2xl font-bold mb-4">Business Hours</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
  title: 'Contact Us | Get in Touch with VisoNext',
  description: 'Contact VisoNext Corporation for a free consultation. We\'re here to help transform your business with innovative solutions.',
  ogTitle: 'Contact VisoNext Corporation',
  ogDescription: 'Get in touch with our team for a free consultation.',
  ogImage: '/images/hero.png'
})

const form = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

const contactInfo = [
  {
    title: 'Email Us',
    content: 'info@visonext.com',
    extra: 'support@visonext.com',
    icon: 'heroicons:envelope'
  },
  {
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    extra: 'Mon-Fri, 9AM-6PM EST',
    icon: 'heroicons:phone'
  },
  {
    title: 'Visit Us',
    content: '123 Business Avenue',
    extra: 'Tech City, TC 12345',
    icon: 'heroicons:map-pin'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // In a real application, you would send the form data to your backend here
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Show success message (you could use a toast notification library)
  alert('Thank you for your message! We\'ll get back to you soon.')
}
</script>
