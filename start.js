// start.js - Combined script to start both serve and healthcheck
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure health.html exists in dist
const distDir = path.join(__dirname, 'dist');
const healthFileDest = path.join(distDir, 'health.html');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(healthFileDest)) {
  const healthFileSrc = path.join(__dirname, 'public', 'health.html');
  if (fs.existsSync(healthFileSrc)) {
    fs.copyFileSync(healthFileSrc, healthFileDest);
    console.log('Copied health.html to dist folder');
  } else {
    // Create a simple health.html file
    fs.writeFileSync(healthFileDest, `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Health Check</title>
      </head>
      <body>
        <h1>OK</h1>
      </body>
    </html>
    `);
    console.log('Created health.html in dist folder');
  }
}

// Start the serve command for static files
const serveProcess = spawn('npx', ['serve', '-s', 'dist'], {
  stdio: 'inherit',
  shell: true
});

console.log('Static file server started');

// Handle exit
process.on('SIGINT', () => {
  serveProcess.kill('SIGINT');
  process.exit(0);
});

serveProcess.on('close', code => {
  console.log(`Static file server exited with code ${code}`);
  process.exit(code);
});
