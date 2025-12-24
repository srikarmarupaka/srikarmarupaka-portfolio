import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. Track Mouse Movement
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Track Hover State (Links & Buttons)
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Hide Default Cursor globally via CSS */}
      <style>{`body { cursor: none; }`}</style>

      {/* The Custom Cursor Element */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
        }}
      >
        {/* Inner Dot / Reticle */}
        <div
          className={`rounded-full border border-[#00ff41] transition-all duration-200 ease-in-out
            ${isHovering ? 'w-8 h-8 bg-transparent border-2' : 'w-2 h-2 bg-[#00ff41] border-0'}
          `}
        />
        
        {/* Optional: Tiny center dot when expanding */}
        {isHovering && (
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#00ff41] rounded-full" />
        )}
      </div>
    </>
  );
};

export default CustomCursor;