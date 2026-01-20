# Build Configuration

## Cloudflare Pages Configuration

This project is configured to deploy on Cloudflare Pages with the following settings:

### Build Settings

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 18

### Environment Variables

No special environment variables are required for basic deployment.

### Local Build

To build locally:

```bash
npm install
npm run build
```

The build output will be in the `dist` directory.

### Build Process

1. Installs dependencies with npm
2. Runs Astro build which:
   - Generates static HTML pages
   - Bundles and optimizes CSS/JS
   - Builds the Starlight documentation site
   - Generates sitemap
   - Creates Pagefind search index

### Troubleshooting

If build fails on Cloudflare Pages:

1. **Check Node.js version**: Ensure Cloudflare Pages is using Node 18+
   - The `.node-version` and `.nvmrc` files specify this
   
2. **Verify build command**: Should be exactly `npm run build`

3. **Check output directory**: Must be set to `dist`

4. **Dependencies**: All required packages are in `package.json`
   - @astrojs/starlight ^0.37.3
   - astro ^5.16.11

### Performance

The build typically completes in under 30 seconds and generates:
- 7 pages
- Optimized CSS and JS bundles
- Search index
- Sitemap

### Static Output

This project uses Astro's `static` output mode, meaning it generates pure HTML/CSS/JS files with no server-side rendering required. This is ideal for Cloudflare Pages.
