# CLAUDE.md - UV Agency Portfolio Codebase Guide

**Last Updated:** 2026-01-16
**Repository:** UVagency/uv2025
**Purpose:** This document provides AI assistants with comprehensive context about the codebase structure, conventions, and workflows.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture & Patterns](#architecture--patterns)
4. [Directory Structure](#directory-structure)
5. [Development Workflows](#development-workflows)
6. [Key Conventions](#key-conventions)
7. [Common Tasks](#common-tasks)
8. [Important Files Reference](#important-files-reference)
9. [Styling Guidelines](#styling-guidelines)
10. [Git Workflow](#git-workflow)

---

## Project Overview

This is a **React + TypeScript portfolio website** for UV Agency, built with modern web technologies focusing on performance, SEO, and user experience. The site showcases client projects with dynamic galleries, video players, and interactive elements.

### Key Features
- Dynamic project portfolio with rich media galleries
- Multiple video player integrations (Vimeo, YouTube, Google Drive)
- Custom animations using Lottie and Anime.js
- SEO-optimized with JSON-LD structured data
- Responsive design with custom interactive elements
- Modal-based navigation panels
- Client logo carousel
- Protected routes for private content

---

## Technology Stack

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 7.2.6** - Build tool and dev server

### UI & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - Headless component library (58 components)
- **Radix UI** - Accessible primitive components
- **class-variance-authority** - Component variant management
- **tailwindcss-animate** - Animation utilities

### Routing & State
- **React Router v6** - Client-side routing
- **TanStack Query** - Server state management
- **Custom hooks** - Local state patterns (see `src/hooks/`)

### Animations & Media
- **Lottie React** - JSON-based animations
- **Anime.js** - JavaScript animation library
- **Embla Carousel** - Touch-friendly carousels

### Forms & Validation
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation integration
- **Zod** - Schema validation (implied)

### SEO & Meta
- **React Helmet Async** - Dynamic meta tags
- Custom SEO component with JSON-LD support

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing
- **TypeScript ESLint** - TypeScript-specific linting

### Deployment
- **Netlify** - Hosting with image CDN optimization
- Custom headers, redirects, and caching strategies

---

## Architecture & Patterns

### Routing Architecture

Routes are defined in `src/App.tsx`:

```typescript
/ - Home page (Index component, NOT lazy loaded)
/contact - Contact page
/project/:projectId - Dynamic project detail pages
/our-company - Company information
/um - United Media page
/events - Events page
/parisExclusive - Private video page (password protected)
/* - 404 Not Found
```

**Pattern:**
- All routes except Index use lazy loading
- All lazy routes wrapped in `RouteWrapper` (ErrorBoundary + Suspense)
- Custom loading fallback with spinning loader
- Error boundaries for graceful degradation

**IMPORTANT:** When adding new routes:
1. Add lazy import at top of `App.tsx`
2. Wrap in `<RouteWrapper>` component
3. Add BEFORE the catch-all `/*` route
4. Include SEO component with appropriate `pageType`

### State Management Strategy

**No global state library** (no Redux, Zustand, etc.). Instead:

1. **Local State**: `useState` for component-level state
2. **Custom Hooks**: Cross-component state sharing
   - `useNavigation()` - Navbar panel state
   - `use-mobile.tsx` - Mobile detection
3. **TanStack Query**: Async data and caching
4. **Body Classes**: Modal/overlay states
   - `info-open` - Info panel active
   - `contact-open` - Contact panel active
   - `our-company-open` - Company panel active

**Pattern Example:**
```typescript
// src/hooks/useNavigation.ts pattern
const { isInfoOpen, toggleInfo } = useNavigation();

// Body class manipulation for modal states
useEffect(() => {
  if (isOpen) {
    document.body.classList.add('modal-open');
  }
  return () => document.body.classList.remove('modal-open');
}, [isOpen]);
```

### Component Architecture

**Three-tier component organization:**

1. **UI Components** (`src/components/ui/`)
   - 58 shadcn/ui components
   - Reusable, composable primitives
   - Custom additions: OptimizedImage, video players, interactive elements

2. **Feature Components** (`src/components/`)
   - `hero/` - Hero section components
   - `project/` - Project detail components
   - `company/` - Company-specific components
   - Root-level: Navbar, Footer, SEO, etc.

3. **Page Components** (`src/pages/`)
   - Route-level components
   - Compose feature and UI components
   - Handle page-specific logic and SEO

**Lazy Loading Pattern:**
- Centralized in `src/components/lazy/index.ts`
- Improves initial load performance
- Used for heavy components (galleries, video players)

### Data Architecture

**Two-tier project data system:**

1. **Summary List** (`src/data/projectsList.ts`)
   ```typescript
   {
     id: string;
     name: string;
     year: string;
     categories: string[];
     images: string[];
     comingSoon?: boolean;
     awardWinning?: boolean;
   }
   ```

2. **Full Project Data** (`src/data/projects/*.json`)
   ```typescript
   {
     id: string;
     name: string;
     year: string;
     categories: string[];
     description: string;
     client?: string;
     overview: string;
     execution: string;
     marketingResults: string;
     videoUrl?: string;
     images: (string | ImageItem)[];
     gallery?: ProjectGallery;
   }
   ```

**Loading Pattern:**
```typescript
// Dynamic imports via getProjectData() helper
const project = await getProjectData(projectId);
```

**Gallery System:**
Supports multiple section types:
- Banner sections (full-width images)
- Text sections (formatted content)
- Image grids (multi-column layouts)
- Mixed grids (portrait + grid combinations)

### Error Handling Strategy

1. **Root ErrorBoundary** - Catches all app errors
2. **RouteErrorBoundary** - Per-route error handling
3. **Fallback UI** - "Return to Home" option
4. **Console suppression** - Browser extension errors in production

---

## Directory Structure

```
uv2025/
├── public/
│   ├── fonts/                     # Self-hosted fonts (Open Sans)
│   └── images/                    # Static images
│       ├── client-logos/          # Brand logos for carousel
│       ├── projects/              # Project images (organized by project ID)
│       │   ├── [project-id]/      # One folder per project
│       │   │   ├── hero.jpg       # Project hero image
│       │   │   └── gallery/       # Gallery images
│       └── team/                  # Team member photos
│
├── src/
│   ├── animations/                # Lottie animation JSON files
│   │
│   ├── components/
│   │   ├── ui/                    # 58 shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── OptimizedImage.tsx # Custom image wrapper
│   │   │   ├── VimeoPlayer.tsx    # Video players
│   │   │   └── ...
│   │   │
│   │   ├── hero/                  # Hero section components
│   │   │   ├── HeroBackground.tsx
│   │   │   ├── HeroBackgroundAnimations.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   └── HeroLogo.tsx
│   │   │
│   │   ├── project/               # Project detail components
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectHeader.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   ├── ProjectVideo.tsx
│   │   │   └── gallery/           # Gallery sub-components
│   │   │
│   │   ├── company/               # Company-specific components
│   │   │   ├── CompanyValues.tsx
│   │   │   ├── EventsMethodWheel.tsx
│   │   │   └── ...
│   │   │
│   │   ├── lazy/                  # Lazy loading exports
│   │   │   └── index.ts           # Central lazy import point
│   │   │
│   │   ├── Navbar.tsx             # Main navigation
│   │   ├── Footer.tsx             # Site footer
│   │   ├── SEO.tsx                # SEO meta manager
│   │   ├── ErrorBoundary.tsx      # Error handling
│   │   └── ...                    # Other root components
│   │
│   ├── pages/                     # Route pages
│   │   ├── Index.tsx              # Home page
│   │   ├── Contact.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── OurCompany.tsx
│   │   ├── UnitedMedia.tsx
│   │   ├── Events.tsx
│   │   ├── PrivateVideo.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/
│   │   ├── projects/              # Individual project JSON files
│   │   │   ├── project-id.json
│   │   │   └── ...
│   │   ├── projectsList.ts        # Project summary list
│   │   ├── projectsData.ts        # Project data loader
│   │   ├── highlightsConfig.ts    # Homepage featured projects
│   │   └── unitedMediaData.ts     # Media page data
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useNavigation.ts       # Navbar state management
│   │   └── use-mobile.tsx         # Mobile detection
│   │
│   ├── lib/                       # Utility libraries
│   │   ├── utils.ts               # cn() helper, utilities
│   │   └── customCursor.js        # Custom cursor logic
│   │
│   ├── constants/                 # Application constants
│   │   └── navbarConstants.ts     # Navigation configuration
│   │
│   ├── types/                     # TypeScript type definitions
│   │   └── project.ts             # Project-related types
│   │
│   ├── styles/                    # CSS files
│   │   ├── index.css              # Main entry (imports all)
│   │   ├── base.css               # Global styles, CSS variables
│   │   ├── fonts.css              # Font-face declarations
│   │   ├── components.css         # Component-specific styles
│   │   └── carousel.css           # Carousel styles
│   │
│   ├── App.tsx                    # App root with routing
│   └── main.tsx                   # React entry point
│
├── index.html                     # HTML entry point
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── netlify.toml                   # Netlify deployment config
├── package.json                   # Dependencies and scripts
└── .env                           # Environment variables
```

---

## Development Workflows

### Local Development

```bash
# Start dev server
npm run dev
# Server runs on http://[::]:8080 (IPv6)

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run linting
npm run lint

# Run tests
npm run test
```

### Environment Variables

Located in `.env`:
```
VITE_IMG_CDN=https://img.agencyuv.com
```

Access in code:
```typescript
import.meta.env.VITE_IMG_CDN
```

### Path Aliases

Use `@/` prefix for imports:
```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';
```

Configured in:
- `vite.config.ts` - Build-time resolution
- `tsconfig.json` - TypeScript intellisense

---

## Key Conventions

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ProjectDetail.tsx` |
| Files (data) | kebab-case | `we-make-your-day.json` |
| CSS classes | Tailwind utilities + custom prefixes | `project-card`, `portfolio-bg` |
| Constants | SCREAMING_SNAKE_CASE | `NAVBAR_ITEMS` |
| Functions | camelCase | `getProjectData()` |
| Types/Interfaces | PascalCase | `ProjectGallery` |

### File Organization

**Component files:**
```typescript
// Imports (external first, then internal)
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Types
interface ComponentProps {
  // ...
}

// Component
export const Component: React.FC<ComponentProps> = ({ ... }) => {
  // ...
};
```

**Data files:**
- JSON for project data
- TypeScript for configuration (exports constants)

### TypeScript Guidelines

**Current Configuration:**
- Permissive settings (no strict mode)
- `noImplicitAny: false`
- `strictNullChecks: false`

**Best Practices:**
- Define interfaces for props and data structures
- Use type imports: `import type { Config } from 'tailwindcss'`
- Leverage type inference where possible
- Add types for function parameters and returns

### Import Order

1. External libraries (React, third-party)
2. Absolute imports from `@/`
3. Relative imports
4. CSS imports (if any)

```typescript
// Good example
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProjectData } from '@/data/projectsData';
import { ProjectHeader } from './ProjectHeader';
```

### Commenting Guidelines

- **Avoid obvious comments** - Code should be self-documenting
- **Document "why" not "what"** - Explain reasoning, not mechanics
- **Use JSDoc for complex functions** - Parameters, returns, usage
- **Spanish comments acceptable** - Codebase contains Spanish comments (team preference)

**Example:**
```typescript
// Bad: Obvious comment
// Loop through projects
projects.forEach(project => { ... });

// Good: Explains reasoning
// Defer analytics loading to improve initial page performance
setTimeout(() => loadAnalytics(), 3500);
```

---

## Common Tasks

### Adding a New Project

**Step-by-step:**

1. **Create project JSON file**
   ```bash
   # File: src/data/projects/[project-id].json
   ```
   ```json
   {
     "id": "project-id",
     "name": "Project Name",
     "year": "2024",
     "categories": ["Category1", "Category2"],
     "description": "Short description",
     "client": "Client Name",
     "overview": "Overview text",
     "execution": "Execution details",
     "marketingResults": "Results text",
     "videoUrl": "https://vimeo.com/...", // optional
     "images": ["hero.jpg", "image1.jpg"],
     "gallery": { ... } // optional
   }
   ```

2. **Add to projects list**
   ```typescript
   // File: src/data/projectsList.ts
   {
     id: 'project-id',
     name: 'Project Name',
     year: '2024',
     categories: ['Category1', 'Category2'],
     images: ['/images/projects/project-id/hero.jpg'],
   }
   ```

3. **Add dynamic import**
   ```typescript
   // File: src/data/projectsData.ts
   const projectImports = {
     // ... existing imports
     'project-id': () => import('./projects/project-id.json'),
   };
   ```

4. **Add images**
   ```bash
   # Directory: public/images/projects/project-id/
   - hero.jpg          # Project hero image
   - gallery/          # Gallery images (if applicable)
     - image1.jpg
     - image2.jpg
   ```

5. **Optional: Add to highlights**
   ```typescript
   // File: src/data/highlightsConfig.ts
   // Only if this should be featured on homepage
   ```

### Adding a New Page

1. **Create page component**
   ```typescript
   // File: src/pages/NewPage.tsx
   import React from 'react';
   import SEO from '@/components/SEO';

   const NewPage = () => {
     return (
       <>
         <SEO
           pageType="company"
           customTitle="Custom Page Title"
           customDescription="Page description for SEO"
         />
         <div className="min-h-screen bg-portfolio-bg">
           {/* Page content */}
         </div>
       </>
     );
   };

   export default NewPage;
   ```

2. **Add lazy import to App.tsx**
   ```typescript
   const NewPage = lazy(() => import("./pages/NewPage"));
   ```

3. **Add route (BEFORE the `/*` catch-all)**
   ```typescript
   <Route path="/new-page" element={
     <RouteWrapper>
       <NewPage />
     </RouteWrapper>
   } />
   ```

4. **Update navigation** (if needed)
   ```typescript
   // File: src/constants/navbarConstants.ts or Navbar.tsx
   ```

### Adding a New UI Component

**Using shadcn/ui CLI:**
```bash
npx shadcn@latest add [component-name]
```

**Manual creation:**
```typescript
// File: src/components/ui/new-component.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary';
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-classes',
          variant === 'secondary' && 'variant-classes',
          className
        )}
        {...props}
      />
    );
  }
);
NewComponent.displayName = 'NewComponent';

export { NewComponent };
```

### Modifying Styles

**Preferred approach: Tailwind utilities**
```typescript
<div className="bg-portfolio-bg text-portfolio-text p-6 rounded-lg">
```

**For complex or repeated styles:**
```css
/* File: src/styles/components.css */
.custom-component {
  @apply bg-portfolio-bg text-portfolio-text p-6 rounded-lg;
  /* Additional custom CSS */
}
```

**For animations:**
```typescript
// File: tailwind.config.ts
keyframes: {
  'custom-animation': {
    from: { opacity: '0' },
    to: { opacity: '1' }
  }
},
animation: {
  'custom': 'custom-animation 0.3s ease-out'
}
```

### Updating Dependencies

```bash
# Check outdated packages
npm outdated

# Update specific package
npm update [package-name]

# Update all packages (use with caution)
npm update

# Note: Use --legacy-peer-deps if peer dependency issues
npm install --legacy-peer-deps
```

---

## Important Files Reference

### Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration, code splitting, CSS inlining |
| `tailwind.config.ts` | Tailwind theme, colors, animations |
| `tsconfig.json` | TypeScript configuration, path mapping |
| `netlify.toml` | Deployment config, headers, redirects, image optimization |
| `package.json` | Dependencies, scripts |
| `.env` | Environment variables (not committed to git) |
| `eslint.config.js` | Linting rules |
| `postcss.config.js` | PostCSS configuration (Tailwind, autoprefixer) |

### Core Application Files

| File | Purpose |
|------|---------|
| `src/main.tsx` | React app entry point |
| `src/App.tsx` | App root, routing, providers |
| `index.html` | HTML entry point, fonts, analytics |
| `src/components/Navbar.tsx` | Main navigation with modal panels |
| `src/components/SEO.tsx` | SEO meta tag manager |
| `src/components/ErrorBoundary.tsx` | Error handling |

### Data & Configuration

| File | Purpose |
|------|---------|
| `src/data/projectsList.ts` | Project summary list (for portfolio grid) |
| `src/data/projectsData.ts` | Project data loader with dynamic imports |
| `src/data/highlightsConfig.ts` | Homepage featured projects |
| `src/constants/navbarConstants.ts` | Navigation configuration |
| `src/types/project.ts` | TypeScript types for projects |

### Styling Files

| File | Purpose |
|------|---------|
| `src/styles/index.css` | Main CSS entry (imports all other CSS) |
| `src/styles/base.css` | Global styles, CSS variables, Tailwind base |
| `src/styles/fonts.css` | Font-face declarations |
| `src/styles/components.css` | Component-specific styles |
| `src/styles/carousel.css` | Carousel-specific styles |

### Utility Files

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | `cn()` helper, utilities |
| `src/lib/customCursor.js` | Custom cursor implementation |
| `src/hooks/useNavigation.ts` | Navbar state management |
| `src/hooks/use-mobile.tsx` | Mobile detection hook |

---

## Styling Guidelines

### Design System

**Color Palette** (from `tailwind.config.ts`):

| Token | Hex | Usage |
|-------|-----|-------|
| `portfolio-bg` | #F5F6E8 | Main background |
| `portfolio-text` | #2C3E3D | Primary text |
| `portfolio-accent` | #6BD8D7 | Accent/highlight color |
| `portfolio-tag-bg` | #6BD8D7 | Tag backgrounds |
| `portfolio-tag-text` | #ffffff | Tag text |
| `portfolio-divider` | #A5D4D3 | Dividers/lines |
| `portfolio-about-bg` | #2C3E3D | Dark section backgrounds |
| `portfolio-smart-media` | #EACB5D | Smart Media specific color |

**Usage in code:**
```typescript
<div className="bg-portfolio-bg text-portfolio-text">
  <span className="text-portfolio-accent">Highlighted</span>
</div>
```

### Typography

**Font Stack:**
- Primary: **Outfit** (Google Fonts)
- Secondary: **Open Sans** (self-hosted)
- Fallback: sans-serif

**Font Classes:**
```typescript
font-sans        // Default (Outfit)
font-hero        // Hero text
font-headline    // Headlines
font-subtitle    // Subtitles
font-body        // Body text
```

**Font Sizes** (use Tailwind utilities):
```
text-xs   text-sm   text-base   text-lg   text-xl
text-2xl  text-3xl  text-4xl    text-5xl  text-6xl
```

### Responsive Design

**Breakpoints:**
```typescript
sm: '640px'   // Small devices
md: '768px'   // Medium devices
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
2xl: '1400px' // Container max-width
```

**Usage:**
```typescript
<div className="p-4 md:p-6 lg:p-8">
  <h1 className="text-2xl md:text-4xl lg:text-5xl">Title</h1>
</div>
```

### Spacing System

Use Tailwind spacing scale (1 unit = 0.25rem):
```
p-2  = 0.5rem   p-4  = 1rem     p-6  = 1.5rem
p-8  = 2rem     p-12 = 3rem     p-16 = 4rem
```

**Consistent spacing:**
- Sections: `py-12 md:py-16 lg:py-24`
- Containers: `px-4 md:px-6 lg:px-8`
- Cards: `p-6 md:p-8`

### Animation Guidelines

**Built-in animations:**
```typescript
animate-spin       // Loading spinners
animate-pulse      // Skeleton loaders
animate-fade-in    // Custom fade-in
```

**Custom animations:**
- Lottie for complex animations (hero background)
- Anime.js for scroll-based animations
- CSS transitions for hover effects

**Transition durations:**
```typescript
duration-150  duration-300  duration-500  // Common
transition-all transition-colors           // Properties
ease-in-out                                // Easing
```

### Component Styling Patterns

**Card pattern:**
```typescript
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
```

**Button pattern:**
```typescript
<button className="px-6 py-3 bg-portfolio-accent text-white rounded-full hover:opacity-90 transition-opacity">
```

**Section pattern:**
```typescript
<section className="min-h-screen bg-portfolio-bg py-16 md:py-24">
  <div className="container mx-auto px-4">
```

### Custom Cursor

Desktop-only custom cursor (hidden on mobile):
- Implemented in `src/lib/customCursor.js`
- CSS in `src/styles/base.css`
- Hover states with scale animations

**Disable on specific elements:**
```typescript
<div className="cursor-default">
```

---

## Git Workflow

### Branch Strategy

**Main Branches:**
- `main` - Production-ready code
- Feature branches: `claude/[feature-name]-[session-id]`

**CRITICAL:** All development work should be done on feature branches starting with `claude/` and ending with the session ID.

### Commit Message Format

Follow existing patterns from git history:

```bash
# Good examples from recent commits:
Fix: mobile hero padding
Added expomascotas
Update components.css
Fix: shadows in safari
```

**Conventions:**
- Use present tense: "Add feature" not "Added feature"
- Be descriptive but concise
- Use prefixes when appropriate:
  - `Fix:` - Bug fixes
  - `Update:` - Updates to existing features
  - `Add:` - New features
  - `Remove:` - Removed features
  - `Refactor:` - Code refactoring

### Push Guidelines

**Always use:**
```bash
git push -u origin <branch-name>
```

**Retry logic for network failures:**
- Retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
- Only retry on network errors, not auth/permission errors

### Creating Pull Requests

**After pushing changes:**

1. **Review changes:**
   ```bash
   git status
   git diff main...HEAD
   git log --oneline
   ```

2. **Create PR using GitHub CLI:**
   ```bash
   gh pr create --title "Feature: Description" --body "
   ## Summary
   - Key change 1
   - Key change 2

   ## Test plan
   - [ ] Tested locally
   - [ ] Checked responsive design
   - [ ] Verified SEO meta tags
   "
   ```

3. **Base branch:** Usually `main`

### Pre-commit Checklist

Before committing:
- [ ] Run `npm run lint` - No linting errors
- [ ] Run `npm run build` - Build succeeds
- [ ] Test locally with `npm run dev`
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Verify no console errors
- [ ] Check image paths and assets load correctly
- [ ] Review file changes (no unintended modifications)

---

## Performance Considerations

### Code Splitting

**Configured in `vite.config.ts`:**
- `vendor` chunk: React core libraries
- `ui` chunk: All Radix UI components
- `utils` chunk: Lottie, Lucide, TanStack Query, date-fns

**Manual chunks help with:**
- Parallel loading
- Better caching (vendor code changes less)
- Faster initial load

### Lazy Loading

**Always lazy load:**
- Route components (except Index)
- Heavy components (galleries, video players)
- Animation libraries
- Large images

**Pattern:**
```typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<LoadingFallback />}>
  <HeavyComponent />
</Suspense>
```

### Image Optimization

**Netlify Image CDN** automatically:
- Converts to AVIF/WebP
- Compresses images
- Serves responsive sizes

**Usage:**
```typescript
<OptimizedImage
  src="/images/projects/project-id/hero.jpg"
  alt="Project name"
  className="w-full h-auto"
/>
```

**Best practices:**
- Use appropriate image formats (JPEG for photos, PNG for graphics)
- Include alt text for SEO and accessibility
- Use lazy loading for below-fold images

### Analytics Loading

**Deferred loading pattern:**
```javascript
// Load analytics 3.5s after page load or on user interaction
setTimeout(() => loadAnalytics(), 3500);
```

Benefits:
- Faster initial page load
- Better Core Web Vitals scores
- No blocking of main thread

---

## SEO Best Practices

### SEO Component Usage

```typescript
import SEO from '@/components/SEO';

<SEO
  pageType="project"           // 'home' | 'project' | 'company' | 'page'
  customTitle="Page Title"      // Optional override
  customDescription="..."       // Optional override
  projectData={project}         // For project pages
/>
```

### Page Types and JSON-LD

| Page Type | JSON-LD Schema |
|-----------|----------------|
| `home` | Organization, WebSite |
| `project` | CreativeWork, ImageObject |
| `company` | Organization |
| `page` | WebPage |

### Meta Tag Checklist

- [ ] Title tag (55-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Language tags (hreflang)
- [ ] JSON-LD structured data

---

## Accessibility Considerations

### ARIA Attributes

Use on interactive elements:
```typescript
<button aria-label="Close menu" aria-expanded={isOpen}>
```

### Keyboard Navigation

Support standard keyboard interactions:
- `ESC` to close modals/panels
- `Tab` for focus management
- `Enter/Space` for button activation

### Semantic HTML

Always prefer semantic elements:
```typescript
// Good
<nav><header><main><footer><article><section>

// Avoid
<div className="nav"><div className="header">
```

### Focus Management

For modals and panels:
```typescript
useEffect(() => {
  if (isOpen) {
    // Trap focus in modal
    firstFocusableElement.focus();
  }
}, [isOpen]);
```

---

## Troubleshooting

### Common Issues

**Build fails with peer dependency errors:**
```bash
npm install --legacy-peer-deps
```

**TypeScript errors on shadcn/ui components:**
- Check `components.json` configuration
- Verify path alias in `tsconfig.json`

**Images not loading:**
- Verify path starts with `/images/` (not `./images/`)
- Check file exists in `public/images/`
- Verify Netlify Image CDN URL in `.env`

**Routing issues:**
- Ensure new routes added BEFORE `/*` catch-all
- Check lazy import syntax
- Verify component export (default vs named)

**Styling not applying:**
- Check Tailwind class names (no typos)
- Verify custom CSS classes defined in `styles/`
- Check CSS import order in `index.css`

### Debug Mode

**Enable verbose logging:**
```typescript
// In development, logs are visible
console.log('Debug info:', data);

// In production, wrapped in:
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}
```

**React DevTools:**
- Install React DevTools browser extension
- Inspect component tree
- Check props and state

---

## Additional Resources

### Documentation Links

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)

### External Tools

- **Netlify**: Deployment and image CDN
- **Vimeo/YouTube/Google Drive**: Video hosting
- **Apollo.io**: Analytics tracking

---

## Changelog

### 2025-12-27
- Initial CLAUDE.md creation
- Documented current codebase structure and conventions
- Added comprehensive development workflows
- Included styling guidelines and best practices

---

**End of Documentation**

For questions or clarifications, refer to the actual implementation in the codebase. This document should be updated as the codebase evolves.
