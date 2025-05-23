// copyHealthCheck.js
// Simple script to copy the health.html file to dist folder after build
const fs = require('fs');
const path = require('path');

// Check if dist directory exists, if not, create it
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Read the health.html file from public directory
fs.copyFile(
  path.join(__dirname, 'public', 'health.html'), 
  path.join(__dirname, 'dist', 'health.html'), 
  (err) => {
    if (err) {
      console.error('Error copying health check file:', err);
      process.exit(1);
    }
    console.log('Health check file copied to dist folder successfully');
  }
);
