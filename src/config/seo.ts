/**
 * SEO Configuration for Axper Transport Landing Page
 * Update these values with your actual business information
 */

export const SEO_CONFIG = {
  // Site Information
  site: {
    name: 'Axper Transport',
    url: 'https://axper-transport.com',
    description: 'Professional transport and logistics solutions with full visibility tracking',
    locale: 'en_US',
  },

  // Business Information
  business: {
    name: 'Axper Transport Solutions',
    email: 'contact@axper-transport.com',
    phone: '+1-XXX-XXX-XXXX',
    address: {
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Zip',
      addressCountry: 'US',
    },
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/axpertransport',
    linkedin: 'https://www.linkedin.com/company/axpertransport',
    twitter: 'https://twitter.com/axpertransport',
  },

  // Keywords for different sections
  keywords: {
    global: ['transport', 'logistics', 'freight', 'delivery', 'cargo', 'shipping'],
    services: ['transport solutions', 'logistics management', 'freight services', 'cargo delivery'],
    fleet: ['vehicle fleet', 'transport equipment', 'logistics vehicles'],
  },

  // Image URLs (update with your actual images)
  images: {
    logo: 'https://axper-transport.com/logo.png',
    ogImage: 'https://axper-transport.com/og-image.jpg',
  },

  // Structured Data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Axper Transport',
    url: 'https://axper-transport.com',
    logo: 'https://axper-transport.com/logo.png',
    description: 'Professional transport and logistics solutions',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-XXX-XXX-XXXX',
      email: 'contact@apex-transport.com',
    },
  },
};

export default SEO_CONFIG;
