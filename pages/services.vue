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
            Our <span class="gradient-text">Services</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive solutions tailored to meet your unique business needs
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card
            v-for="(service, index) in services"
            :key="index"
            variant="glass"
            :delay="index * 150"
          >
            <div class="flex flex-col h-full">
              <div class="relative h-64 -m-6 mb-6 rounded-t-xl overflow-hidden">
                <NuxtImg
                  :src="service.image"
                  :alt="service.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div class="flex-1">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 rounded-lg gradient-corporate flex items-center justify-center mr-4">
                    <Icon :name="service.icon" class="h-6 w-6 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold">{{ service.title }}</h3>
                </div>
                
                <p class="text-gray-600 dark:text-gray-400 mb-6">{{ service.description }}</p>
                
                <div class="mb-6">
                  <h4 class="font-semibold mb-3">Key Benefits:</h4>
                  <ul class="space-y-2">
                    <li v-for="(benefit, idx) in service.benefits" :key="idx" class="flex items-start">
                      <Icon name="heroicons:check-circle" class="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span class="text-gray-600 dark:text-gray-400">{{ benefit }}</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="gradient" class="w-full" as="NuxtLink" to="/contact">
                  Get Started
                  <Icon name="heroicons:arrow-right" class="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-center mb-16"
        >
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Our <span class="gradient-text">Process</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven methodology to deliver exceptional results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in process"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="index * 100"
            class="text-center"
          >
            <div class="w-16 h-16 rounded-full gradient-corporate flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Services | Business Solutions & Consulting',
  description: 'Explore VisoNext\'s comprehensive business services including consulting, digital transformation, and data analytics. Transform your business today.',
  ogTitle: 'Our Services | VisoNext Corporation',
  ogDescription: 'Comprehensive business solutions including consulting, digital transformation, and data analytics.',
  ogImage: '/images/service-consulting.png'
})

const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your operations and drive sustainable growth. Our expert consultants work closely with you to identify opportunities and implement effective solutions.',
    image: '/images/service-consulting.png',
    icon: 'heroicons:briefcase',
    benefits: [
      'Strategic planning and execution',
      'Process optimization',
      'Change management support',
      'Performance improvement'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge digital solutions. We help you leverage technology to improve efficiency, enhance customer experience, and stay competitive.',
    image: '/images/service-digital.png',
    icon: 'heroicons:rocket-launch',
    benefits: [
      'Cloud migration and integration',
      'Digital workflow automation',
      'Legacy system modernization',
      'Technology roadmap development'
    ]
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights for better decision making. Our analytics solutions help you understand your business better and make data-driven decisions.',
    image: '/images/service-analytics.png',
    icon: 'heroicons:chart-bar',
    benefits: [
      'Advanced data visualization',
      'Predictive analytics',
      'Real-time reporting dashboards',
      'Business intelligence solutions'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to support your business growth. We design, implement, and manage cloud solutions tailored to your needs.',
    image: '/images/service-digital.png',
    icon: 'heroicons:cloud',
    benefits: [
      'Cloud architecture design',
      'Multi-cloud management',
      'Security and compliance',
      '24/7 monitoring and support'
    ]
  }
]

const process = [
  {
    title: 'Discovery',
    description: 'We learn about your business, goals, and challenges'
  },
  {
    title: 'Strategy',
    description: 'We develop a customized plan to achieve your objectives'
  },
  {
    title: 'Implementation',
    description: 'We execute the plan with precision and expertise'
  },
  {
    title: 'Optimization',
    description: 'We continuously improve and refine for best results'
  }
]
</script>
