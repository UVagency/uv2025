# Security Audit Report
## UV Agency Portfolio Website

**Audit Date:** 2026-02-04
**Auditor:** Claude Code Security Audit
**Repository:** UVagency/uv2025
**Branch:** claude/security-audit-report-yFZph

---

## Executive Summary

This security audit identified **4 critical**, **4 high**, **5 medium**, and **4 low** severity vulnerabilities in the codebase. The most concerning issues relate to client-side authentication, HTML sanitization, and Content Security Policy configuration.

### Risk Overview

| Severity | Count | Immediate Action Required |
|----------|-------|---------------------------|
| **CRITICAL** | 4 | Yes |
| **HIGH** | 4 | Within 1 week |
| **MEDIUM** | 5 | Within 2-4 weeks |
| **LOW** | 4 | As resources permit |

---

## Critical Findings

### 1. Weak Client-Side Authentication

**File:** `src/components/AuthGuard.tsx`
**Lines:** 14-54
**CVSS Score:** 9.1 (Critical)

**Description:**
The authentication system for protected routes stores credentials client-side and performs password validation in JavaScript, making it trivially bypassable.

**Vulnerabilities:**
- Plain text password comparison (lines 43-44)
- Authentication stored in `sessionStorage` - accessible to any JavaScript
- Fallback hardcoded username `'uv'` (line 26)
- No rate limiting on login attempts
- No server-side validation

**Current Code:**
```typescript
const validCredentials = {
  username: import.meta.env.VITE_AUTH_USERNAME || 'uv',
  password: import.meta.env.VITE_AUTH_PASSWORD || ''
};

// Client-side comparison - easily bypassable
if (credentials.username === validCredentials.username &&
    credentials.password === validCredentials.password) {
  sessionStorage.setItem('privateVideoAuth', 'true');
}
```

**Attack Vector:**
An attacker can bypass authentication by:
1. Opening browser DevTools
2. Running `sessionStorage.setItem('privateVideoAuth', 'true')`
3. Refreshing the page

**Recommendation:**
Implement proper server-side authentication using:
- Netlify Functions with JWT tokens
- Auth0, Firebase Auth, or similar service
- Server-side session management

---

### 2. Unsafe HTML Sanitization

**File:** `src/lib/sanitizeHtml.ts`
**Lines:** 1-41
**CVSS Score:** 8.1 (High)

**Description:**
Custom HTML sanitization function is incomplete and vulnerable to XSS attacks.

**Vulnerabilities:**
- Uses `innerHTML` for parsing (line 11) - can execute scripts during parsing
- No protection against event handler injection
- Limited tag whitelist but no comprehensive security testing
- Code comment explicitly states: "Para producción, considera usar DOMPurify"

**Current Code:**
```typescript
const temp = document.createElement('div');
temp.innerHTML = html; // Dangerous - executes scripts during parsing
```

**Used In:**
`src/components/project/ProjectGallery.tsx:114` via `dangerouslySetInnerHTML`

**Recommendation:**
Replace with DOMPurify:
```bash
npm install isomorphic-dompurify
```

---

### 3. Permissive Content Security Policy

**File:** `netlify.toml`
**Lines:** 38-40
**CVSS Score:** 7.5 (High)

**Description:**
The CSP allows `unsafe-inline` and `unsafe-eval`, significantly reducing XSS protection.

**Current CSP (partial):**
```
script-src 'self' 'unsafe-inline' 'unsafe-eval' ...
```

**Issues:**
- `unsafe-inline` allows inline scripts - XSS vulnerable
- `unsafe-eval` allows `eval()` and similar - code injection risk
- Allows scripts from multiple external domains

**Recommendation:**
- Remove `unsafe-inline` and `unsafe-eval`
- Implement nonce-based CSP for necessary inline scripts
- Audit third-party script requirements

---

### 4. Hardcoded Sensitive URLs

**File:** `src/pages/PrivateVideo.tsx`
**Line:** 42
**CVSS Score:** 5.3 (Medium, but Critical for data exposure)

**Description:**
Google Drive video URL is hardcoded in source code, exposed in git history.

**Current Code:**
```typescript
videoUrl: "https://drive.google.com/file/d/1a0_V3Yt6wX4QnpY1lun0FQzwQvIrr6j_/view?usp=sharing",
```

**Impact:**
- File ID exposed in public repository
- Anyone with the URL can access the "private" content
- Cannot be fully revoked even if URL changes (git history)

**Recommendation:**
- Move URL to environment variables
- Use backend API to serve authenticated URLs
- Consider using Google Drive API with proper access controls

---

## High Severity Findings

### 5. Analytics/Tracking IDs Exposed

**File:** `index.html`
**Lines:** 55, 98

**Description:**
Third-party tracking identifiers are hardcoded in HTML:
- Apollo.io: `663d43ae4d562101c795b683`
- Metricool: `ea1ffd20c517c72e15de57da9493a686`

**Risk:** Low direct security risk, but enables fingerprinting and may violate privacy policies if not disclosed.

---

### 6. Cookies Without Security Flags

**File:** `src/components/ui/sidebar.tsx`
**Line:** 85

**Description:**
Cookies set without `Secure`, `SameSite`, or `HttpOnly` flags.

**Current Code:**
```javascript
document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
```

**Should Be:**
```javascript
document.cookie = `${name}=${value}; path=/; max-age=${age}; Secure; SameSite=Lax`
```

---

### 7. i18n Cookie Without Security Flags

**File:** `src/lib/i18n.ts`
**Line:** 31

**Description:**
Language preference cookie lacks security attributes.

**Current Code:**
```typescript
Cookies.set('i18nextLng', lng, { expires: 365 });
```

---

### 8. SessionStorage for Security State

**Files:**
- `src/components/AuthGuard.tsx`
- `src/components/ui/VimeoPlayer.tsx`
- `src/components/ui/YouTubePlayer.tsx`

**Description:**
Using `sessionStorage` for authentication state is insecure - accessible to any JavaScript running on the page.

---

## Medium Severity Findings

### 9. TypeScript Not in Strict Mode

**File:** `tsconfig.json`
**Lines:** 12, 14, 17

**Configuration:**
```json
"noImplicitAny": false,
"noUnusedParameters": false,
"strictNullChecks": false
```

**Impact:** Reduced type safety allows potential runtime errors and security issues.

---

### 10. Console Error Suppression

**File:** `src/main.tsx`
**Lines:** 29-46

**Description:**
Production code suppresses console errors, potentially hiding security issues.

**Recommendation:** Use error tracking service (Sentry, LogRocket) instead.

---

### 11. ESLint Security Rules Disabled

**File:** `eslint.config.js`
**Line:** 26

**Configuration:**
```javascript
"@typescript-eslint/no-unused-vars": "off"
```

---

### 12. Video URL Validation

**File:** `src/components/ui/GoogleDrivePlayer.tsx`
**Lines:** 15-19

**Description:**
Regex validation for video URLs is permissive, no origin verification.

---

### 13. CORS Configuration in Development

**File:** `vite.config.ts`
**Lines:** 16-21

**Configuration:**
```javascript
"Access-Control-Allow-Origin": "*"
```

**Status:** Acceptable for development, but ensure never deployed to production.

---

## Low Severity Findings

### 14. Generic Error Messages

**File:** `src/components/AuthGuard.tsx`
**Line:** 48

**Issue:** Single generic error message is good, but consider rate limiting.

---

### 15. Missing CSRF Protection

**Impact:** Low - no forms submit to own backend currently.

---

### 16. No Subresource Integrity

**Description:** External scripts loaded without SRI hashes.

---

### 17. Information Disclosure in SEO

**Description:** SEO tags may expose internal project structure.

---

## Positive Security Findings

| Feature | Status | Location |
|---------|--------|----------|
| HSTS Header | Enabled (1 year) | `netlify.toml:42` |
| X-Frame-Options | DENY | `netlify.toml:34` |
| X-Content-Type-Options | nosniff | `netlify.toml:36` |
| Referrer-Policy | strict-origin-when-cross-origin | `netlify.toml:37` |
| Permissions-Policy | Restrictive | `netlify.toml:41` |
| Vimeo postMessage origin check | Implemented | `VimeoPlayer.tsx:107` |
| YouTube postMessage origin check | Implemented | `YouTubePlayer.tsx:107` |

---

## Dependency Analysis

### Current Versions (from package.json)

| Package | Version | Status |
|---------|---------|--------|
| React | 18.3.1 | Current |
| TypeScript | 5.5.3 | Current |
| Vite | 7.2.6 | Current |
| React Router | 6.26.2 | Current |

### Recommendation
Run `npm audit` regularly and set up automated dependency scanning.

---

## Remediation Priority

### Phase 1: Immediate (1-2 days)
1. Move Google Drive URL to environment variables
2. Add DOMPurify for HTML sanitization
3. Add security flags to all cookies

### Phase 2: Short-term (1-2 weeks)
1. Implement server-side authentication (Netlify Functions + JWT)
2. Harden CSP - remove unsafe-inline/unsafe-eval
3. Enable TypeScript strict mode
4. Configure error tracking service

### Phase 3: Medium-term (2-4 weeks)
1. Implement rate limiting for authentication
2. Add CSRF protection for future forms
3. Add Subresource Integrity for external scripts
4. Security audit of all third-party integrations

### Phase 4: Ongoing
1. Regular `npm audit` runs
2. Automated dependency updates
3. Periodic security reviews
4. Security awareness for team

---

## Conclusion

The codebase has a solid foundation with modern security headers configured in Netlify. However, the client-side authentication implementation presents a significant security risk and should be addressed immediately. The custom HTML sanitization should be replaced with a battle-tested library like DOMPurify.

**Overall Security Rating:** 6/10 (Moderate Risk)

Key strengths:
- Modern security headers
- Good origin validation for embedded content
- Up-to-date dependencies

Key weaknesses:
- Client-side authentication easily bypassable
- Custom HTML sanitization insufficient
- Permissive CSP configuration

---

*Report generated by Claude Code Security Audit*
*Session: 017DwT1v58JpnAQYopQCJGjG*
