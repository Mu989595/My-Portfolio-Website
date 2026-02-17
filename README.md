# Mostafa Kamal Portfolio

A fast, minimal, and bold portfolio website built with Astro and Tailwind CSS.

## Features
- **Astro 5.0**: Performance-first architecture.
- **Tailwind CSS**: Utility-first styling for a bold, custom look.
- **Design System**: Professional theme using Dark Red (`#561C24`) and Maroon (`#6D2932`) accents.
- **Fonts**: Khand (Display) and Switzer (Body) from Fontshare.
- **Pages**: Home, About, and Projects with placeholder content.
- **Newsletter Capture**: Bold frontend form ready for integration.
- **SEO Ready**: Sitemap, robots.txt, and metadata configured.

## Tech Stack
- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build
Build the static site:
```bash
npm run build
```
The output will be in the `dist/` directory.

## Deployment to Cloudflare Pages

1. **Connect to GitHub**: Push your repository to GitHub.
2. **Create Project**: On the Cloudflare Dashboard, go to **Workers & Pages** > **Pages** > **Connect to Git**.
3. **Configure Build Settings**:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. **Environment Variables**: Use Node.js version 18 or higher (Cloudflare usually handles this automatically for Astro).
5. **Deploy**: Cloudflare will automatically build and deploy your site on every push.

## Customization
- **Content**: Update the `.astro` files in `src/pages/` to replace placeholder text.
- **Newsletter**: To make the form functional, point the `<form>` action to your ESP (ConvertKit, Beehiiv, etc.) or use a service like Basin.
- **Colors**: Modify the `violent-red` value in `tailwind.config.mjs`.
