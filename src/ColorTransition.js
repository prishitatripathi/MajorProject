import React, { useEffect, useState } from 'react';

const ColorTransition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      setScrollPosition(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* First Section */}
      <div className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-black">Scroll Down</h2>
      </div>

      {/* Transition Section */}
      <div 
        className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: `rgb(${255 - (scrollPosition * 2.55)}, ${255 - (scrollPosition * 2.55)}, ${255 - (scrollPosition * 2.55)})`,
          transition: 'background-color 0.3s ease-out'
        }}
      >
        <h2 
          className="text-4xl font-bold"
          style={{
            color: `rgb(${scrollPosition * 2.55}, ${scrollPosition * 2.55}, ${scrollPosition * 2.55})`,
            transition: 'color 0.3s ease-out'
          }}
        >
          {Math.round(scrollPosition)}% Scrolled
        </h2>
      </div>

      {/* Last Section */}
      <div className="h-screen flex items-center justify-center bg-black">
        <h2 className="text-4xl font-bold text-white">You Made It!</h2>
      </div>
    </div>
  );
};

export default ColorTransition;