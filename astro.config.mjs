import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Jack McGhee Real Estate',
      description: 'Premium property services on the Sunshine Coast',
      social: [
        {
          name: 'email',
          icon: 'email',
          label: 'Email Jack McGhee',
          href: 'mailto:jackmcghee@propertypro.com.au',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'About Jack',
          link: '/about/',
        },
        {
          label: 'Blog',
          items: [
            { label: '2026 Market Outlook', link: '/blog/sunshine-coast-market-outlook-2026/' },
            { label: 'First-Time Buyer Tips', link: '/blog/first-time-buyer-tips/' },
            { label: 'Selling Property on Sunshine Coast', link: '/blog/selling-property-sunshine-coast/' },
            { label: '2026 Data-Driven Growth', link: '/blog/sunshine-coast-2026-data-driven-growth/' },
          ],
        },
      ],
      customCss: [
        './src/styles/starlight-custom.css',
      ],
    }),
  ],
  output: 'static',
  site: 'https://mdav43.github.io',
  base: '/md-property',
});
