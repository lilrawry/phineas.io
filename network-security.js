// network-security.js
// A script to test secure connections to your website

const https = require('https');
const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Website Network Security Checker');
console.log('--------------------------------');

// Default domain from the .env file or fallback
const defaultDomain = 'phineasio-production-359b.up.railway.app';

rl.question(`Enter the domain to check [${defaultDomain}]: `, (input) => {
  const domain = input || defaultDomain;
  console.log(`\nChecking security for: ${domain}\n`);
  
  // Check DNS records
  dns.resolve(domain, 'A', (err, addresses) => {
    if (err) {
      console.error('❌ DNS lookup failed:', err.message);
    } else {
      console.log('✅ DNS A records found:', addresses);
      
      // Check for CAA records (Certificate Authority Authorization)
      dns.resolve(domain, 'CAA', (err, records) => {
        if (err && err.code !== 'ENODATA') {
          console.log('⚠️ CAA check failed:', err.message);
        } else if (err && err.code === 'ENODATA') {
          console.log('⚠️ No CAA records found. Consider adding CAA records to restrict which CAs can issue certificates.');
        } else {
          console.log('✅ CAA records found:', records);
        }
        
        // Check HTTPS
        checkHttps(domain);
      });
    }
  });
  
  // Check MX records for proper email configuration
  dns.resolve(domain, 'MX', (err, addresses) => {
    if (err && err.code !== 'ENODATA') {
      console.error('❌ MX lookup failed:', err.message);
    } else if (err && err.code === 'ENODATA') {
      console.log('ℹ️ No MX records found.');
    } else {
      console.log('✅ MX records found:', addresses);
    }
  });
});

function checkHttps(domain) {
  const options = {
    hostname: domain,
    port: 443,
    path: '/',
    method: 'GET',
    rejectUnauthorized: true, // Verify SSL cert
    timeout: 5000
  };
  
  const req = https.request(options, (res) => {
    console.log(`✅ HTTPS connection established: ${res.statusCode}`);
    
    // Check security headers
    console.log('\nChecking Security Headers:');
    const headers = res.headers;
    
    checkHeader(headers, 'strict-transport-security', 'HSTS header');
    checkHeader(headers, 'content-security-policy', 'Content-Security-Policy');
    checkHeader(headers, 'x-content-type-options', 'X-Content-Type-Options');
    checkHeader(headers, 'x-frame-options', 'X-Frame-Options');
    checkHeader(headers, 'x-xss-protection', 'X-XSS-Protection');
    checkHeader(headers, 'referrer-policy', 'Referrer-Policy');
    
    rl.close();
  });
  
  req.on('error', (e) => {
    console.error('❌ HTTPS request failed:', e.message);
    rl.close();
  });
  
  req.on('timeout', () => {
    console.error('❌ HTTPS request timed out');
    req.destroy();
    rl.close();
  });
  
  req.end();
}

function checkHeader(headers, headerName, displayName) {
  if (headers[headerName]) {
    console.log(`✅ ${displayName} found: ${headers[headerName]}`);
  } else {
    console.log(`❌ ${displayName} not found`);
  }
}
