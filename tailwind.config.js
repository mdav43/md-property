/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Premium luxury palette - deep, sophisticated tones
        graphite: {
          DEFAULT: '#2C2C2C',
          dark: '#1A1A1A',
          light: '#3D3D3D',
        },
        charcoal: {
          DEFAULT: '#0A2E4D',
          dark: '#071E33',
          light: '#1A5F7A',
        },
        stone: {
          DEFAULT: '#F4E9D8',
          warm: '#FAF7F2',
          cool: '#E8DED0',
        },
        champagne: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B7',
          dark: '#A68955',
        },
      },
      fontFamily: {
        // Premium serif for headings - refined and confident
        serif: ['Playfair Display', 'Georgia', 'serif'],
        // Neutral sans for body - highly readable
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Slightly smaller body with increased line-height for density
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.8' }],
      },
      spacing: {
        // Tight but breathable spacing scale
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      boxShadow: {
        // Subtle, minimal shadows
        'premium': '0 2px 16px rgba(0, 0, 0, 0.06)',
        'premium-md': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 8px 32px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        luxury: {
          "primary": "#C9A96E",           // champagne accent
          "primary-content": "#0A2E4D",   // charcoal text on primary
          "secondary": "#0A2E4D",         // charcoal
          "secondary-content": "#FAF7F2", // stone warm text
          "accent": "#E8D5B7",            // champagne light
          "accent-content": "#2C2C2C",    // graphite text
          "neutral": "#2C2C2C",           // graphite
          "neutral-content": "#FAF7F2",   // stone warm
          "base-100": "#FAF7F2",          // stone warm (main background)
          "base-200": "#F4E9D8",          // stone default
          "base-300": "#E8DED0",          // stone cool
          "base-content": "#2C2C2C",      // graphite text
          "info": "#1A5F7A",              
          "success": "#4A7C59",           
          "warning": "#D4A574",           
          "error": "#B85C5C",             
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
}

