# CSS Architecture

This project uses **Pico CSS** as the base CSS framework with custom overrides for branding.

## File Structure

```
src/styles/
└── global.css       # Pico CSS overrides and custom theme
```

## Design Approach

### 1. **Pico CSS Framework**
The project uses [Pico CSS v2](https://picocss.com/) as the foundation:
- Semantic HTML styling (minimal classes needed)
- Built-in responsive design
- Accessibility features
- Classless components

### 2. **Custom Theme Overrides**
`global.css` overrides Pico CSS defaults with the Sunshine Coast brand:
- Custom color palette using Pico CSS variables
- Typography settings (Playfair Display, Inter fonts)
- Navigation and footer styling
- Brand-specific design tokens

### 3. **Page-Specific Styles**
Unique page layouts use scoped `<style>` tags in `.astro` files:
- Hero sections
- Image placeholders
- Layout-specific adjustments

## Color Palette

The Sunshine Coast inspired luxury palette:
- **Ocean Blues**: Deep ocean (#0A2E4D), Rich coastal (#1A5F7A), Light ocean (#86BBD8)
- **Sandy Tones**: Warm beige (#F4E9D8), Light cream (#FAF7F2)
- **Gold Accents**: Elegant gold (#C9A96E), Light gold (#E8D5B7)

## Usage

### Importing Styles

In Layout.astro:
```astro
---
import '../styles/global.css';
---

<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <!-- ... -->
</head>
```

### Using Pico CSS

Pico CSS works with semantic HTML:

```html
<!-- Buttons -->
<a href="#" role="button">Primary Button</a>
<a href="#" role="button" class="secondary">Secondary Button</a>

<!-- Grid Layout -->
<div class="grid">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Cards -->
<article>
  <header>Card Header</header>
  <p>Card content...</p>
  <footer>Card Footer</footer>
</article>

<!-- Container -->
<div class="container">Centered content</div>
```

### CSS Variables

Custom colors from `global.css`:

```css
.my-element {
  color: var(--ocean-deep);
  background: var(--sand-warm);
  border-color: var(--gold-accent);
}
```

## Benefits

✅ **Minimal CSS**: Pico CSS provides most styling automatically
✅ **Semantic HTML**: Improved accessibility and SEO
✅ **Maintainable**: Few custom styles to manage
✅ **Responsive**: Mobile-first design out of the box
✅ **Consistent**: Framework ensures visual consistency
✅ **Performance**: Lightweight CSS framework (~10KB gzipped)
