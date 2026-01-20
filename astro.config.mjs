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
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/org-jack-marcus/md-property',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'About Jack',
          link: '/about',
        },
        {
          label: 'Blog',
          items: [
            { label: 'All Articles', link: '/blog' },
            { label: 'Market Outlook 2026', link: '/blog/sunshine-coast-market-outlook-2026' },
            { label: 'First-Time Buyer Tips', link: '/blog/first-time-buyer-tips' },
            { label: 'Selling Property', link: '/blog/selling-property-sunshine-coast' },
            { label: 'Data-Driven Growth', link: '/blog/sunshine-coast-2026-data-driven-growth' },
          ],
        },
      ],
      customCss: [],
    }),
  ],
  output: 'static',
  site: 'https://mdav43.github.io',
  base: '/md-property',
});
