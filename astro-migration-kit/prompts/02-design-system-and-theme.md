# Step 02: Design System, Tokens & Zero-FOUC Theming

---

## 📋 Context & Goal for AI Assistant

You are an expert UI Engineer and CSS Specialist. 
Your task is to implement the exact design tokens, typography, color palette, and zero-FOUC (Flash of Unstyled Content) dark/light theme switcher for the **Lade Stack** Astro project in **100% Pure Astro & Vanilla TypeScript** (Zero React).

### Brand Identity Tokens
- **Sage Accent**: `#6E8F6A` (Primary brand accent, buttons, focus rings, highlights)
- **Charcoal Text / Primary**: `#1C1C1C` (Dark typography in light mode)
- **Warm Paper Canvas**: `#F5F3EB` (Warm cream/paper background for light mode)
- **Deep Dark Canvas**: `#050505` (Clean rich background for dark mode)
- **Fonts**:
  - `Inter` (sans-serif body & UI)
  - `DM Serif Display` (editorial serif headings)
  - `JetBrains Mono` (code blocks and tech tags)

---

## 🛠️ Step-by-Step Implementation Instructions

### 1. Create `src/styles/global.css`
Define the complete HSL color variables and utility base styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 44 26% 94%;       /* #F5F3EB */
    --foreground: 0 0% 11%;         /* #1C1C1C */
    --card: 0 0% 100%;
    --card-foreground: 0 0% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 11%;
    --primary: 113 16% 49%;         /* #6E8F6A Sage Green */
    --primary-foreground: 0 0% 100%;
    --secondary: 44 20% 90%;
    --secondary-foreground: 0 0% 11%;
    --muted: 44 15% 90%;
    --muted-foreground: 0 0% 40%;
    --accent: 113 16% 49%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 44 15% 85%;
    --input: 44 15% 85%;
    --ring: 113 16% 49%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 0 0% 2%;          /* #050505 Deep Dark */
    --foreground: 0 0% 93%;         /* #EDEDED */
    --card: 0 0% 6%;
    --card-foreground: 0 0% 93%;
    --popover: 0 0% 6%;
    --popover-foreground: 0 0% 93%;
    --primary: 113 22% 56%;         /* #7EA47A */
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 12%;
    --secondary-foreground: 0 0% 93%;
    --muted: 0 0% 12%;
    --muted-foreground: 0 0% 60%;
    --accent: 113 22% 56%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62% 30%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 113 22% 56%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground transition-colors duration-200 antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(110, 143, 106, 0.3);
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(110, 143, 106, 0.6);
}
```

### 2. Configure `tailwind.config.mjs`
Map colors to the HSL variables and define font families:

```javascript
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E6ECE5',
          200: '#CFDBCF',
          300: '#B0C4AF',
          400: '#8EAA8C',
          500: '#6E8F6A', // Core Sage Accent
          600: '#587455',
          700: '#465C43',
          800: '#384A36',
          900: '#2E3D2D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [typography],
};
```

### 3. Create `src/components/ThemeToggle.astro`
Create a clean, accessible Vanilla JS theme switcher button:

```astro
---
import { Icon } from 'astro-icon/components';

interface Props {
  class?: string;
}

const { class: className = '' } = Astro.props;
---

<button
  type="button"
  id="theme-toggle"
  class={`inline-flex items-center justify-center p-2 rounded-xl border border-border bg-card/60 hover:bg-muted text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
  aria-label="Toggle Dark Mode"
>
  <!-- Sun Icon (shown in dark mode) -->
  <span class="hidden dark:block w-4 h-4">
    <Icon name="lucide:sun" class="w-4 h-4 text-amber-400" />
  </span>
  <!-- Moon Icon (shown in light mode) -->
  <span class="block dark:hidden w-4 h-4">
    <Icon name="lucide:moon" class="w-4 h-4 text-foreground/80" />
  </span>
</button>

<script>
  function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('ladestack-theme', isDark ? 'dark' : 'light');
    });
  }

  // Support initial load and view transitions
  setupThemeToggle();
  document.addEventListener('astro:page-load', setupThemeToggle);
</script>
```

---

## 🔍 Verification Checklist

1. Run `npm run check` to verify types.
2. In your layout or test page, include `src/styles/global.css` and the theme toggle.
3. Open `http://localhost:4321` in browser:
   - Click the theme toggle button.
   - Verify the `.dark` class toggles on `<html>`.
   - Verify background shifts from warm paper (`#F5F3EB`) to deep dark (`#050505`).
   - Reload page and verify theme preference is preserved with zero visual flicker (no FOUC).
