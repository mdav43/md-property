# CSS Architecture

This project follows a modular CSS architecture for maintainability and performance.

## File Structure

```
src/styles/
├── global.css       # Global resets, CSS custom properties, base typography
├── layout.css       # Navigation and footer components
├── components.css   # Reusable UI components (buttons, cards, features)
└── blog-post.css    # Shared blog post styles
```

## Design Principles

### 1. **CSS Custom Properties (Variables)**
All design tokens (colors, spacing, typography) are defined as CSS custom properties in `global.css`. This ensures:
- Single source of truth for design values
- Easy theme maintenance
- Consistent spacing and colors across the site

### 2. **Separation of Concerns**
- **Global styles**: Base resets, typography, and layout containers
- **Layout components**: Header and footer (used on every page)
- **Reusable components**: Buttons, cards, and other UI elements shared across pages
- **Page-specific styles**: Kept in each `.astro` file for unique page layouts

### 3. **Component-Based Architecture**
Each CSS file contains related styles:
- Reduces duplication
- Improves maintainability
- Makes styles easy to locate and modify

### 4. **Performance Optimization**
- CSS is bundled by Astro at build time
- Only necessary styles are loaded
- Shared styles are cached across pages
- Minimal CSS duplication

### 5. **Maintainability**
- Semantic naming conventions
- Consistent spacing using CSS variables
- Logical grouping of related styles
- Clear separation between global and page-specific styles

## Usage

### Importing Styles

In Layout.astro (global):
```astro
---
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/components.css';
---
```

In page-specific files:
```astro
---
import '../../styles/blog-post.css';
---
```

### CSS Variables

Use CSS custom properties defined in `global.css`:

```css
.my-element {
  color: var(--ocean-deep);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

### Adding New Styles

1. **Global styles**: Add to `global.css` if it affects the entire site
2. **Reusable components**: Add to `components.css` if used across multiple pages
3. **Page-specific**: Keep in the page's `<style>` section if unique to that page

## Benefits

✅ **DRY (Don't Repeat Yourself)**: No duplicate CSS definitions
✅ **Maintainable**: Easy to find and update styles
✅ **Performant**: Efficient CSS delivery and caching
✅ **Scalable**: Simple to add new pages and components
✅ **Consistent**: Design tokens ensure visual consistency
