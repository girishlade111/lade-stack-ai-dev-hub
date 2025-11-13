# Lade Stack Futuristic Loader

A sleek, futuristic animated loader for the Lade Stack brand featuring an AI boot sequence with matte black (#0a0a0a) and white (#ffffff) color palette.

## Features

- **Futuristic AI Boot Sequence**: Smooth animation representing system initialization
- **Matte Black & White Design**: Clean, high-tech aesthetic
- **Smart Motion Effects**: Digital reveals, data particles, and light flow
- **Smooth Transitions**: Cubic-bezier easing for professional feel
- **Responsive Design**: Works on all device sizes
- **Lottie Integration**: Optimized performance with vector animations
- **Customizable Duration**: Configurable animation timing
- **Fade-out Effect**: Smooth 1.2s opacity + scale-down transition

## Installation

```bash
npm install lottie-react
```

## Quick Start

### Basic Implementation

```tsx
import LadeStackLoader from './components/LadeStackLoader';

function App() {
  const handleLoaderComplete = () => {
    console.log('Loader animation completed');
  };

  return (
    <div className="App">
      <LadeStackLoader 
        onAnimationComplete={handleLoaderComplete}
        duration={4}
      />
      {/* Your app content */}
    </div>
  );
}
```

### Integration Examples

#### 1. Page Load Preloader

```tsx
import { useState } from 'react';
import LadeStackLoader from './components/LadeStackLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <LadeStackLoader 
          onAnimationComplete={handleLoadComplete}
          duration={4}
        />
      )}
      
      {/* Main app content - hidden during loading */}
      <main style={{ display: isLoading ? 'none' : 'block' }}>
        {/* Your application content */}
      </main>
    </div>
  );
}
```

#### 2. Route Change Loader

```tsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LadeStackLoader from './components/LadeStackLoader';

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    setIsTransitioning(true);
    navigate(path);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 4000); // Match loader duration
  };

  return (
    <div>
      {isTransitioning && <LadeStackLoader />}
      
      <nav>
        <button onClick={() => handleNavigate('/dashboard')}>
          Dashboard
        </button>
        <button onClick={() => handleNavigate('/profile')}>
          Profile
        </button>
      </nav>
      
      <main>
        {/* Route content */}
      </main>
    </div>
  );
}
```

#### 3. API Data Loading

```tsx
import { useState, useEffect } from 'react';
import LadeStackLoader from './components/LadeStackLoader';

function DataComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 3000));
        const result = await fetch('/api/data');
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <LadeStackLoader 
        duration={3}
        className="custom-loader"
      />
    );
  }

  return (
    <div>
      {/* Render your data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

#### 4. Custom Configuration

```tsx
import LadeStackLoader from './components/LadeStackLoader';

function CustomLoaderExample() {
  const handleComplete = () => {
    // Custom actions on completion
    document.body.style.overflow = 'auto';
  };

  return (
    <LadeStackLoader
      onAnimationComplete={handleComplete}
      duration={5} // Longer duration
      className="fullscreen-loader" // Custom CSS class
    />
  );
}
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onAnimationComplete` | `() => void` | `undefined` | Callback function called when animation completes |
| `duration` | `number` | `4` | Animation duration in seconds |
| `className` | `string` | `''` | Additional CSS classes |

## CSS Customization

The loader can be customized through CSS classes:

```css
/* Custom loader styling */
.custom-loader {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

/* Override specific styles */
.custom-loader .loader-text {
  font-family: 'YourCustomFont', sans-serif;
}

.custom-loader .loading-message {
  color: #f0f0f0;
}

.custom-loader .tagline {
  color: #888888;
}
```

## Animation Sequence

1. **Boot Pulse** (0-1.2s): Glowing dot appears and pulses
2. **Line Expansion** (1.0-2.0s): Line expands horizontally 
3. **Letter Reveals** (1.5-4.0s): Sequential reveal of "LADE • STACK"
4. **Underline Draw** (3.0-3.5s): Underline smoothly draws beneath text
5. **Loading Text** (3.25-3.5s): "Initializing Lade Stack..." appears
6. **Tagline Fade** (3.75-5.75s): Tagline fades in
7. **Fade Out** (4.0-5.2s): Complete loader fades out with scale

## Technical Details

- **File Size**: Under 500KB (optimized Lottie JSON)
- **Animation Duration**: 4 seconds (configurable)
- **Frame Rate**: 60 FPS
- **Color Palette**: Matte black (#0a0a0a) and white (#ffffff)
- **Browser Support**: All modern browsers supporting CSS3 and ES6
- **Performance**: Hardware accelerated animations using Lottie

## Troubleshooting

### Animation Not Playing
- Ensure Lottie JSON file is accessible at `/ladestack-loader.json`
- Check browser console for Lottie errors
- Verify `lottie-react` is properly installed

### Styles Not Applied
- Ensure CSS file is imported: `import '../styles/LadeStackLoader.css'`
- Check for CSS conflicts with existing styles
- Verify class names are not being overridden

### Performance Issues
- Reduce duration if animation stutters
- Check if multiple loaders are running simultaneously
- Ensure proper cleanup of timers in useEffect

## Files Structure

```
src/
├── components/
│   └── LadeStackLoader.tsx
├── styles/
│   └── LadeStackLoader.css
public/
└── ladestack-loader.json
```

## Contributing

To modify the animation:
1. Edit the JSON data in `LadeStackLoader.tsx` or load from external file
2. Adjust timing and effects as needed
3. Test across different browsers and devices
4. Maintain the 4-second duration for consistency

## License

This component is designed for the Lade Stack brand and follows modern web development best practices.