# AGENTS.md - About Me Portfolio

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Overview

A Next.js 16 portfolio website using the App Router, React 19, Tailwind CSS 4, and TypeScript.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Create optimized production build
npm run start    # Start production server
npm run lint     # Run ESLint with Next.js core-web-vitals rules
npx tsc --noEmit # Run TypeScript type checking
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - All TypeScript strict checks are on
- Use explicit types for function parameters and return types when not inferrable
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `unknown` over `any`; use type guards when needed
- Use `Readonly<T>` for immutable data structures
- Use `React.ReactNode` for generic React children

```typescript
// Props typing pattern
export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { ... }
```

### Imports

- **Absolute imports** via `@/*` alias (maps to project root)
- Group imports in order:
  1. Built-in/node modules
  2. External packages
  3. Internal modules (using `@/` alias)
  4. Relative imports
  5. Type imports (`import type`)
- Use `import type` for type-only imports to enable tree-shaking

```typescript
import type { Metadata } from "next";           // type imports
import { Geist, Geist_Mono } from "next/font";  // value imports
import { someFunction } from "@/lib/utils";    // absolute path
import "./globals.css";                          // relative path
```

### React Components

- Use **server components** by default (no "use client" directive)
- Add `"use client"` only when you need client-side interactivity (hooks, browser APIs)
- Prefer function components with explicit prop types
- Use named exports for page components, default exports for layouts
- Use Lucide React for icons (`import { IconName } from "lucide-react"`)

```typescript
"use client";  // Only when needed for interactivity

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() { ... }
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile`, `NavBar`)
- **Files**: kebab-case for non-component files, PascalCase for components (`page.tsx`, `UserCard.tsx`)
- **Variables/functions**: camelCase (`getUserData`, `isLoading`)
- **Constants**: SCREAMING_SNAKE_CASE for true constants
- **CSS classes**: kebab-case (Tailwind: `bg-black`, `text-zinc-50`)

### Tailwind CSS

- Use Tailwind CSS 4 with `@theme` directive for custom properties
- Use `dark:` prefix for dark mode variants
- Use `inline` modifier for CSS variables (`@theme inline`)
- Use arbitrary values sparingly (`[20px]`, `bg-[#123456]`)
- Use `backdrop-blur-*` for glassmorphism effects
- Use `zinc-*` palette for neutral colors

```css
@import "tailwindcss";

:root {
  --background: #09090b;
}

@theme inline {
  --color-background: var(--background);
}
```

### Custom CSS Animations

Available animation classes in `app/globals.css`:
- `.animate-fade-up` - Fade in with upward translation
- `.animate-fade-in` - Simple fade in
- `.animate-slide-left` - Slide in from left
- `.animate-float` - Gentle floating effect

Delay utilities: `.delay-100` through `.delay-500`

```tsx
<div className="animate-fade-up delay-200">Content</div>
```

### File Structure

```
app/
  layout.tsx      # Root layout with metadata, fonts
  page.tsx        # Home page
  globals.css     # Global styles, Tailwind config, animations
components/      # Reusable React components
public/           # Static assets (favicon.ico)
```

### Error Handling

- Use TypeScript's type system to prevent runtime errors
- Handle null/undefined with optional chaining (`?.`) and nullish coalescing (`??`)
- Use error boundaries for unexpected errors in client components
- Never log sensitive information (API keys, tokens, PII)

### Accessibility

- Use semantic HTML elements
- Include `alt` text for images
- Use `aria-*` attributes when semantic HTML is insufficient
- Ensure keyboard navigation works for interactive elements
- Use `aria-label` for icon-only buttons

## Important Notes

### Next.js 16 Breaking Changes

This project uses Next.js 16 which has breaking changes from earlier versions:
- Review `node_modules/next/dist/docs/` for latest API documentation
- Check for deprecation notices when using older patterns
- Some App Router APIs may have changed - verify before use

### React 19

React 19 has new features and changes:
- Review compiler behavior changes
- Check for new patterns for `use` hook and server actions
- Some React 18 patterns may be deprecated

## Environment Variables

- Prefix client-side variables with `NEXT_PUBLIC_`
- Access via `process.env.NEXT_PUBLIC_VAR_NAME`
- Never expose sensitive server-side secrets to the client
