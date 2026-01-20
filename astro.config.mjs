import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Jack McGhee Real Estate',
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Home', slug: '' },
            { label: 'About Jack', slug: 'about' },
          ],
        },
        {
          label: 'Blog',
          autogenerate: { directory: 'blog' },
        },
      ],
    }),
  ],
  output: 'static',
  site: 'https://mdav43.github.io',
  base: '/md-property',
});
