// Simple Express security middleware for deployment environments
module.exports = function setupSecurityHeaders(app) {
  // Apply security headers to all responses
  app.use((req, res, next) => {
    // Prevent clickjacking attacks
    res.setHeader('X-Frame-Options', 'DENY');
    
    // Prevent MIME-sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Enable XSS protection in browsers
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Control referrer information
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Restrict browser features/APIs
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    
    // Enable HTTPS strict mode
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    
    // Add Content-Security-Policy
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https://api.lanyard.rest wss://api.lanyard.rest;"
    );
    
    next();
  });
};
