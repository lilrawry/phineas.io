import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import fs from 'fs';
import path from 'path';

// Railway-specific build configuration
// This configuration avoids using terser to prevent build failures
export default defineConfig({
  plugins: [
    react(), 
    viteTsconfigPaths(), 
    svgrPlugin(),
    // Custom plugin to copy health.html to dist after build
    {
      name: 'copy-health-check',
      closeBundle: () => {
        const srcPath = path.resolve('public/health.html');
        const destPath = path.resolve('dist/health.html');
        
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
          console.log('Health check file copied to dist folder');
        }
      }
    }
  ],
  build: {
    sourcemap: false,
    minify: 'esbuild', // Use esbuild instead of terser for Railway
    target: 'es2015',
    outDir: 'dist',
  },
});
