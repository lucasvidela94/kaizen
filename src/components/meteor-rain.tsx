import { useEffect, useRef } from 'react';

/**
 * MeteorRain Component
 * 
 * Generates 30 animated meteors falling diagonally across the screen.
 * To activate: Uncomment the import and <MeteorRain /> in src/pages/index.tsx and add the CSS styles in src/styles/meteor-rain.css
 * 
 * Features:
 * - 30 dynamic meteors with random sizes, positions, and timing
 * - Diagonal fall animation with proper rotation
 * - Randomized opacity and duration for natural effect
 * - Non-intrusive (pointer-events: none)
 */
const MeteorRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createMeteor = () => {
      const meteor = document.createElement('div');
      
      meteor.style.position = 'absolute';
      meteor.style.width = Math.random() * 2 + 1 + 'px';
      meteor.style.height = Math.random() * 20 + 10 + 'px';
      meteor.style.background = `linear-gradient(to bottom, rgba(95, 215, 191, ${Math.random() * 0.5 + 0.3}), transparent)`;
      meteor.style.borderRadius = '1px';
      meteor.style.transform = 'rotate(-45deg)';
      meteor.style.pointerEvents = 'none';
      
      meteor.style.left = Math.random() * 100 + '%';
      meteor.style.top = '-50px';
      
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 5;
      
      meteor.style.animation = `meteor-fall ${duration}s linear ${delay}s infinite`;
      
      container.appendChild(meteor);
    };

    for (let i = 0; i < 30; i++) {
      createMeteor();
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="meteor-container" />;
};

export default MeteorRain;
