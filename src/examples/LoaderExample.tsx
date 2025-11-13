import React, { useState, useEffect } from 'react';
import LadeStackLoader from '../components/LadeStackLoader';

const LoaderExample: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setShowLoader(false);
      setContent(`
        <div style="
          padding: 2rem;
          text-align: center;
          color: #ffffff;
          background: #1a1a1a;
          border-radius: 8px;
          margin: 2rem auto;
          max-width: 600px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        ">
          <h2 style="color: #ffffff; margin-bottom: 1rem;">🚀 Welcome to Lade Stack</h2>
          <p style="color: #cccccc; line-height: 1.6;">
            The futuristic loader has completed! This represents your main application content
            that would appear after the AI boot sequence finishes.
          </p>
          <button 
            onclick="location.reload()" 
            style="
              background: #ffffff;
              color: #0a0a0a;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 6px;
              font-weight: 600;
              cursor: pointer;
              margin-top: 1rem;
              transition: all 0.3s ease;
            "
            onmouseover="this.style.background='#f0f0f0'"
            onmouseout="this.style.background='#ffffff'"
          >
            Reload to See Loader Again
          </button>
        </div>
      `);
    }, 4000); // 4 seconds to match loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Lade Stack Loader */}
      {showLoader && (
        <LadeStackLoader 
          onAnimationComplete={() => {
            console.log('🎬 Lade Stack loader animation completed!');
            console.log('💫 Ready to show main content');
          }}
          duration={4}
        />
      )}

      {/* Main Content (appears after loader) */}
      {!showLoader && (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}

      {/* Integration Instructions */}
      {!showLoader && (
        <div style={{
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#ffffff'
        }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>
            🔧 Integration Instructions
          </h2>
          
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>
              Basic Usage
            </h3>
            <pre style={{ 
              backgroundColor: '#0a0a0a', 
              padding: '1rem', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.9rem'
            }}>
{`import LadeStackLoader from './components/LadeStackLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LadeStackLoader 
          onAnimationComplete={() => setIsLoading(false)}
          duration={4}
        />
      )}
      {/* Your app content */}
    </>
  );
}`}
            </pre>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>
              Advanced Configuration
            </h3>
            <pre style={{ 
              backgroundColor: '#0a0a0a', 
              padding: '1rem', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.9rem'
            }}>
{`<LadeStackLoader
  onAnimationComplete={handleComplete}
  duration={5} // Custom duration
  className="custom-loader" // Custom styling
/>`}
            </pre>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>
              🎨 Features
            </h3>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>✅ AI boot sequence animation</li>
              <li>✅ Matte black & white design</li>
              <li>✅ Smooth cubic-bezier transitions</li>
              <li>✅ Responsive design</li>
              <li>✅ Customizable duration</li>
              <li>✅ Fade-out with scale effect</li>
              <li>✅ Loading dots animation</li>
              <li>✅ Brand tagline integration</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoaderExample;