import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: mode === 'production' ? {
      // En producción, CORS debe ser restringido al dominio específico
      // Se configura mejor en netlify.toml para producción
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Resource-Policy": "same-origin",
    } : {
      // Headers permisivos solo para desarrollo local
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  },
  plugins: [
    react(),
    {
      name: 'inline-css',
      apply: 'build',
      enforce: 'post',
      generateBundle(_, bundle) {
        const cssFile = Object.keys(bundle).find(key => key.endsWith('.css'));
        const htmlFile = Object.keys(bundle).find(key => key.endsWith('.html'));

        if (!cssFile || !htmlFile) return;

        const cssAsset = bundle[cssFile];
        const htmlAsset = bundle[htmlFile];

        if (cssAsset.type !== 'asset' || htmlAsset.type !== 'asset') return;

        const cssContent = cssAsset.source;
        const htmlContent = htmlAsset.source as string;

        // Inject style tag and remove the link tag
        // Vite injects the link tag automatically, so we just append style to head if we can't find the link easily (or replacing </head> is safer)
        // Actually, preventing the link tag emission is harder without intercepting.
        // Easiest is to replace the link tag if we can check how vite emits it, but vite emits it in transformIndexHtml or a specific plugin.
        // POST-enforce: The HTML file in bundle ALREADY has the link tag injected by Vite's HTML plugin.
        // We can regex replace it.

        const newHtml = htmlContent.replace(
          /<link rel="stylesheet".*?href="\/assets\/.*?\.css">/,
          `<style>${cssContent}</style>`
        );

        htmlAsset.source = newHtml;

        // Optional: remove the CSS file from output if truly inlined
        // delete bundle[cssFile]; 
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'animejs': path.resolve(__dirname, './node_modules/animejs/dist/bundles/anime.esm.js'),
    },
  },
  build: {
    cssCodeSplit: false, // Ensure single CSS file for easier inlining
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-aspect-ratio', '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-collapsible', '@radix-ui/react-context-menu', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-hover-card', '@radix-ui/react-label', '@radix-ui/react-menubar', '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-progress', '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toggle', '@radix-ui/react-toggle-group', '@radix-ui/react-tooltip', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          utils: ['lottie-react', 'lucide-react', '@tanstack/react-query', 'date-fns'],
        },
      },
    },
  },
}));
