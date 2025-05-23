// railway-check.js - Check if the project is properly set up for Railway deployment
const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // You might need to install this: npm install chalk

// Check if files exist and have correct content
function checkFile(filePath, expectedContent = null) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(chalk.red(`✗ ${filePath} is missing`));
      return false;
    }
    
    if (expectedContent) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes(expectedContent)) {
        console.log(chalk.yellow(`⚠ ${filePath} doesn't contain expected content: ${expectedContent}`));
        return false;
      }
    }
    
    console.log(chalk.green(`✓ ${filePath} exists`));
    return true;
  } catch (error) {
    console.log(chalk.red(`✗ Error checking ${filePath}: ${error.message}`));
    return false;
  }
}

console.log(chalk.blue('=== Railway Deployment Check ==='));

// Check essential files
const essentialFiles = [
  { path: 'railway.json', content: '"healthcheckPath"' },
  { path: 'start.js', content: 'Static file server started' },
  { path: 'copyHealthCheck.js', content: 'Health check file copied' },
  { path: 'public/health.html', content: '<h1>OK</h1>' },
  { path: 'Procfile', content: 'web: npm run start:railway' },
  { path: 'package.json', content: '"start:railway"' },
];

let allGood = true;
essentialFiles.forEach(file => {
  if (!checkFile(file.path, file.content)) {
    allGood = false;
  }
});

// Check if build command works
console.log(chalk.blue('\n=== Testing Railway Build Command ==='));
console.log(chalk.yellow('To fully test the Railway build command, run:'));
console.log(chalk.cyan('npm run build:railway'));

// Final verdict
console.log(chalk.blue('\n=== Final Check Results ==='));
if (allGood) {
  console.log(chalk.green('✓ Your project appears to be properly configured for Railway deployment'));
  console.log(chalk.green('✓ Make sure you push these changes to your repository'));
} else {
  console.log(chalk.red('✗ Some issues were found with your Railway configuration'));
  console.log(chalk.yellow('Fix the issues above before deploying to Railway'));
}

console.log(chalk.blue('\n=== Railway Deployment Tips ==='));
console.log(chalk.cyan('1. Make sure you have the serve package installed'));
console.log(chalk.cyan('2. Check if the healthcheck endpoint responds correctly'));
console.log(chalk.cyan('3. Set environment variables in the Railway dashboard if needed'));
