import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Jack McGhee Real Estate',
      tagline: 'Premium property services on the Sunshine Coast',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/org-jack-marcus/md-property',
        },
      ],
    }),
  ],
  output: 'static',
  site: 'https://mdav43.github.io',
  base: '/md-property',
});
