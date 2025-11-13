import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import '../styles/LadeStackLoader.css';

interface LadeStackLoaderProps {
  onAnimationComplete?: () => void;
  duration?: number;
  className?: string;
}

const LadeStackLoader: React.FC<LadeStackLoaderProps> = ({
  onAnimationComplete,
  duration = 4,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, (duration - 1.2) * 1000); // Start fade 1.2s before complete

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, duration * 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className={`ladestack-loader ${isFading ? 'fade-out' : ''} ${className}`}>
      <div className="loader-container">
        <Lottie
          animationData={{"v": "5.7.4", "fr": 60, "ip": 0, "op": 240, "w": 400, "h": 400, "nm": "Lade Stack Loader", "ddd": 0, "assets": [], "layers": [{"ddd": 0, "ind": 1, "ty": 4, "nm": "Background", "sr": 1, "ks": {"o": {"a": 0, "k": 100}, "r": {"a": 0, "k": 0}, "p": {"a": 0, "k": [200, 200, 0]}, "a": {"a": 0, "k": [0, 0, 0]}, "s": {"a": 0, "k": [100, 100, 100]}}, "ao": 0, "shapes": [{"ty": "rc", "d": 1, "s": {"a": 0, "k": [400, 400]}, "p": {"a": 0, "k": [0, 0]}, "r": {"a": 0, "k": 0}}], "ip": 0, "op": 240, "st": 0, "bm": 0}, {"ddd": 0, "ind": 2, "ty": 4, "nm": "Glowing Dot", "sr": 1, "ks": {"o": {"a": 1, "k": [{"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]}, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 10, "s": [100]}, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 20, "s": [60]}, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 30, "s": [100]}, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 40, "s": [60]}, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 50, "s": [100]}, {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 60, "s": [0]}, {"t": 70, "s": [0]}]}, "r": {"a": 0, "k": 0}, "p": {"a": 0, "k": [200, 200, 0]}, "a": {"a": 0, "k": [0, 0, 0]}, "s": {"a": 1, "k": [{"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 0, "s": [0, 0, 100]}, {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 10, "s": [100, 100, 100]}, {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 20, "s": [80, 80, 100]}, {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 30, "s": [120, 120, 100]}, {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 40, "s": [80, 80, 100]}, {"i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]}, "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]}, "t": 50, "s": [100, 100, 100]}, {"t": 60, "s": [0, 0, 100]}]}}, "ao": 0, "shapes": [{"ty": "gr", "it": [{"ty": "el", "p": {"a": 0, "k": [0, 0]}, "s": {"a": 0, "k": [8, 8]}, "d": 1}, {"ty": "fl", "c": {"a": 0, "k": [1, 1, 1, 1]}, "o": {"a": 0, "k": 100}, "r": 1, "nm": "Fill 1"}, {"ty": "tr", "p": {"a": 0, "k": [0, 0]}, "a": {"a": 0, "k": [0, 0]}, "s": {"a": 0, "k": [100, 100]}, "r": {"a": 0, "k": 0}, "o": {"a": 0, "k": 100}, "sk": {"a": 0, "k": 0}, "sa": {"a": 0, "k": 0}}], "nm": "Dot", "np": 3}], "ip": 0, "op": 240, "st": 0, "bm": 0}]}}
          autoplay
          loop={false}
          className="lottie-player"
          style={{ 
            width: '200px', 
            height: '200px',
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
          }}
        />
        <div className="loader-text">
          <p className="loading-message">Initializing Lade Stack...</p>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <p className="tagline">Empowering Developers. Simplifying AI.</p>
        </div>
      </div>
    </div>
  );
};

export default LadeStackLoader;