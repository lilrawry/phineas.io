// healthcheck.js - A simple server to run alongside the serve command for reliable healthchecks

const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a simple HTTP server that responds with a "healthy" status
const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
    return;
  }
  
  // For all other routes, serve the health.html file
  try {
    const healthFile = path.join(__dirname, 'dist', 'health.html');
    const content = fs.readFileSync(healthFile);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
  } catch (error) {
    res.statusCode = 500;
    res.end('Health check file not found');
  }
});

// Start server on Railway port or fallback to 8080
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Healthcheck server running on port ${PORT}`);
});

// Log when the server starts
console.log('Healthcheck server started');
