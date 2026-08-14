# Lazy Loading & Font Optimization Guide

## Overview

This document describes the lazy loading and font optimization improvements made to the Vibrant Desi Vibe website to ensure optimal loading performance and visual stability.

## What Was Changed

### 1. **Font Loading Optimization**

#### Enhanced Font Strategy
- **Preconnect hints** for faster DNS resolution to Google Fonts CDN
- **DNS prefetch** for early domain resolution
- **Preload critical fonts** (Manrope, Sora, Material Symbols) to start downloading before parser reaches stylesheet
- **High-importance preconnect** to prioritize font server connections

#### Improved Font Ready Detection
The boot script now waits for **ALL fonts** to load, not just icons:
- Manrope (regular and bold weights)
- Sora (display font for headings)
- Material Symbols Rounded (icon ligatures)

This ensures the site only displays when the UI is fully ready, preventing:
- **FOUT** (Flash of Unstyled Text) - system fonts briefly showing before branded fonts arrive
- **FOIT** (Flash of Invisible Text) - icons showing as text until font loads
- **Layout shift** - headings changing size when fonts load

#### CSS Improvements
- Headers use fallback system fonts during load, then smoothly swap
- Icons remain invisible until the Material Symbols font is confirmed loaded
- Added CSS containment (`contain: layout style paint`) to sections for better rendering performance

### 2. **Image Lazy Loading**

#### SmartImage Component Enhancements
Enhanced the existing `SmartImage` component with:

- **IntersectionObserver-based loading**: Images start loading 250px before entering the viewport (configurable via `loadThreshold` prop)
- **Conditional rendering**: Non-priority images only render when they should be loaded, reducing DOM bloat
- **Dual loading strategy**: 
  - Priority images: `loading="eager"` with `fetchPriority="high"`
  - Below-fold images: Native lazy loading + IntersectionObserver

#### Usage
```tsx
// Hero image - loads immediately
<SmartImage src="/hero.jpg" alt="Hero" priority />

// Below-fold image - loads when 250px from viewport
<SmartImage src="/section.jpg" alt="Section" loadThreshold="250px" />

// Custom preload distance
<SmartImage src="/far-image.jpg" alt="Far" loadThreshold="500px" />
```

### 3. **Component Code Splitting**

#### New Lazy Component Utilities (`src/lib/lazy-components.ts`)

Provides utilities for splitting heavy components into separate chunks:

```tsx
import { lazyComponent, withLazySuspense, preloadComponent, useIntersectionPreload } from '@/lib/lazy-components';

// Basic lazy loading
const HeavyComponent = lazyComponent(() => import('@/components/Heavy'));

// With suspense fallback
const WrappedComponent = withLazySuspense(
  lazyComponent(() => import('@/components/Heavy')),
  <div>Loading...</div>
);

// Preload when element enters viewport
const { ref: triggerRef, Component } = useIntersectionPreload(
  () => import('@/components/ModuleCarousel'),
  { rootMargin: '250px' }
);

return (
  <>
    <div ref={triggerRef} style={{ height: '100px' }} />
    <Suspense fallback={<Skeleton />}>
      <Component />
    </Suspense>
  </>
);
```

### 4. **Critical Path Optimization**

#### First Paint Improvements
- Inline critical boot script for immediate class flag application
- Preload critical fonts before stylesheet parsing
- Priority images load before below-fold content
- System fonts display while branded fonts load (display=swap)

#### Performance Metrics Impact
- **LCP (Largest Contentful Paint)**: Improved by font preloading and priority image optimization
- **CLS (Cumulative Layout Shift)**: Eliminated by waiting for all fonts before showing UI, plus image aspect ratio reserves
- **FID (First Input Delay)**: Reduced by code splitting and lazy component loading

## Usage Examples

### Image Lazy Loading

```tsx
// Hero section - priority image
<SmartImage
  src="/hero-image.jpg"
  alt="Hero"
  ratio="16/9"
  priority
  sizes="100vw"
/>

// Gallery items - lazy load with custom threshold
<div className="gallery">
  {images.map((img, i) => (
    <SmartImage
      key={i}
      src={img.src}
      alt={img.alt}
      ratio="1/1"
      loadThreshold="300px"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  ))}
</div>
```

### Component Code Splitting

```tsx
// pages/courses.tsx
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Split heavy components into separate chunks
const CourseFilters = lazy(() => import('@/components/CourseFilters'));
const CourseGrid = lazy(() => import('@/components/CourseGrid'));
const CourseReviews = lazy(() => import('@/components/CourseReviews'));

export function CoursesPage() {
  return (
    <>
      <h1>Our Courses</h1>

      {/* Quick load */}
      <Suspense fallback={<Skeleton className="h-12 w-48" />}>
        <CourseFilters />
      </Suspense>

      {/* Main content */}
      <Suspense fallback={<Skeleton count={12} />}>
        <CourseGrid />
      </Suspense>

      {/* Below fold */}
      <Suspense fallback={null}>
        <CourseReviews />
      </Suspense>
    </>
  );
}
```

## Performance Checklist

- [ ] Font files preload before stylesheet
- [ ] All fonts (text + icons) wait for ready state before showing UI
- [ ] Hero images load with priority
- [ ] Below-fold images lazy load with IntersectionObserver
- [ ] Heavy components are code-split and lazy loaded
- [ ] Route changes preload next route's critical components
- [ ] Images have proper aspect ratios to prevent layout shift
- [ ] Blurred image previews show immediately

## Monitoring

### Core Web Vitals to Track

1. **LCP (Largest Contentful Paint)** < 2.5s
   - Monitor font loading time
   - Ensure priority images load quickly

2. **CLS (Cumulative Layout Shift)** < 0.1
   - Verify fonts load without text jumping
   - Check image aspect ratios are set

3. **FID (First Input Delay)** < 100ms
   - Monitor main thread blocking
   - Lazy load heavy components

### Testing

```bash
# Build and test locally
npm run build
npm run preview

# Check bundle size
npm run build -- --analyze

# Lighthouse audit
# Chrome DevTools > Lighthouse > Generate report
```

## Browser Support

- All modern browsers support IntersectionObserver
- Fallback to native lazy loading for older browsers
- Font API works in Chrome, Firefox, Edge, Safari
- Graceful degradation: If font loading fails, system fonts display

## Files Modified

1. `index.html` - Added font preloading and optimized boot script
2. `src/routes/__root.tsx` - Enhanced font loading strategy
3. `src/components/SmartImage.tsx` - Added IntersectionObserver lazy loading
4. `src/styles.css` - Added CSS containment, font optimization
5. `src/lib/lazy-components.ts` - New utility for component code splitting

## Next Steps

1. Monitor Core Web Vitals in production
2. Implement route-based code splitting if not already done
3. Consider using `<link rel="prefetch">` for likely next routes
4. Profile bundle size and optimize further if needed
5. Test on slow 3G networks to verify improvements
