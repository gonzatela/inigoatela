import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.BASE_PATH || '/',
  resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  build: { rollupOptions: { input: {
    home: 'index.html', articulos: 'articulos/index.html', sobre: 'sobre-mi/index.html',
    aprendizaje: 'articulos/aprender-sin-releer/index.html', decisiones: 'articulos/decidir-con-claridad/index.html',
  } } },
});
