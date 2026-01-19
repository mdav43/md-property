import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false, // We'll apply our own base styles
    }),
  ],
  output: 'static',
  site: 'https://mdav43.github.io',
  base: '/md-property',
});
