// security-check.js
// A simple script to verify common security settings in your project

const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // For colored console output

// You might need to install chalk: npm install chalk

console.log(chalk.blue('===== Website Security Validation ====='));

// Check for package-lock.json or yarn.lock
const hasLockFile = fs.existsSync('./package-lock.json') || fs.existsSync('./yarn.lock');
console.log(
  hasLockFile
    ? chalk.green('✓ Lock file found - dependencies are locked to specific versions')
    : chalk.red('✗ No lock file found - add package-lock.json or yarn.lock for dependency security')
);

// Check for Content Security Policy in index.html
try {
  const indexHtml = fs.readFileSync('./index.html', 'utf8');
  const hasCSP = indexHtml.includes('Content-Security-Policy');
  console.log(
    hasCSP
      ? chalk.green('✓ Content Security Policy found in index.html')
      : chalk.yellow('⚠ No Content Security Policy in index.html - consider adding one')
  );
} catch (error) {
  console.log(chalk.red('✗ Could not read index.html'));
}

// Check for security headers in netlify.toml or similar files
try {
  const netConf = fs.existsSync('./netlify.toml') && fs.readFileSync('./netlify.toml', 'utf8');
  const hasSecHeaders = netConf && (
    netConf.includes('X-Content-Type-Options') || 
    netConf.includes('X-Frame-Options') ||
    netConf.includes('X-XSS-Protection')
  );
  
  console.log(
    hasSecHeaders
      ? chalk.green('✓ Security headers found in deployment config')
      : chalk.yellow('⚠ No security headers found in deployment config')
  );
} catch (error) {
  console.log(chalk.yellow('⚠ Could not check deployment config for security headers'));
}

// Check for outdated dependencies
console.log(chalk.yellow('⚠ Remember to run `npm audit` or `yarn audit` to check for vulnerabilities'));

// Check for HTTPS enforcement
try {
  const hasHttpsRedirect = 
    (fs.existsSync('./netlify.toml') && fs.readFileSync('./netlify.toml', 'utf8').includes('force-https')) ||
    (fs.existsSync('./static.json') && fs.readFileSync('./static.json', 'utf8').includes('https_only'));
  
  console.log(
    hasHttpsRedirect
      ? chalk.green('✓ HTTPS enforcement found in deployment config')
      : chalk.yellow('⚠ No explicit HTTPS enforcement found - consider adding it')
  );
} catch (error) {
  console.log(chalk.yellow('⚠ Could not check for HTTPS enforcement configuration'));
}

console.log(chalk.blue('==================================='));
