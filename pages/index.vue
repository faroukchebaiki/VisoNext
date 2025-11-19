<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <ServicesPreview />
    <TestimonialsSection />
    <CTASection />
    <StatsSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home | Innovative Solutions for Modern Businesses',
  description: 'VisoNext Corporation provides cutting-edge solutions to help your business thrive in today\'s competitive market. Transform your business with our expert consulting and technology services.',
  ogTitle: 'VisoNext Corporation | Innovative Solutions for Modern Businesses',
  ogDescription: 'Transform your business with cutting-edge technology and expert consulting services.',
  ogImage: '/images/hero.png',
  ogUrl: 'https://visonext.farouk.uk',
  twitterCard: 'summary_large_image',
  twitterTitle: 'VisoNext Corporation | Innovative Solutions',
  twitterDescription: 'Transform your business with cutting-edge technology and expert consulting.',
  twitterImage: '/images/hero.png'
})

useSchemaOrg([
  {
    '@type': 'Organization',
    name: 'VisoNext Corporation',
    url: 'https://visonext.farouk.uk',
    logo: 'https://visonext.farouk.uk/logo.png',
    description: 'Innovative solutions for modern businesses',
    sameAs: [
      'https://twitter.com/visonext',
      'https://linkedin.com/company/visonext'
    ]
  },
  {
    '@type': 'WebSite',
    name: 'VisoNext Corporation',
    url: 'https://visonext.farouk.uk',
    description: 'Innovative solutions for modern businesses'
  }
])
</script>
