# phineas.io

This is the React app that runs on [phineas.io](https://phineas.io).

## "Stack"

- [Vite](https://vitejs.dev)
- styled-components
- TypeScript
- [Cloudflare Pages](https://pages.cloudflare.com) (don't recommend; use Vercel instead)

## Security Features

This website implements several security best practices:

1. **Content Security Policy (CSP)**: Restricts which resources can be loaded, preventing XSS attacks
2. **HTTP Security Headers**: Includes X-Frame-Options, X-Content-Type-Options, etc.
3. **Subresource Integrity**: Ensures third-party resources haven't been tampered with
4. **HTTPS Only**: All connections are encrypted
5. **Dependency Security**: Regular updates to prevent vulnerable dependencies

### Security Checks

Run the security validation script:

```bash
node security-check.js
```

Run npm audit to check for vulnerabilities:

```bash
npm audit
```
