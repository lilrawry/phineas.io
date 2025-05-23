import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// Railway-specific build configuration
// This configuration avoids using terser to prevent build failures
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    sourcemap: false,
    minify: 'esbuild', // Use esbuild instead of terser for Railway
    target: 'es2015',
    outDir: 'dist',
  },
});
