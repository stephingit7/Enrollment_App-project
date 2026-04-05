import React, { useEffect, useRef } from 'react';
import '../App.css';

const EventLingo = () => {
  const iconRef = useRef(null);
  
  useEffect(() => {
    let scale = 1;
    let growing = true;
    let animationId = null;
    
    const animateIcon = () => {
      if (iconRef.current) {
        if (growing) {
          scale += 0.01;
          if (scale >= 1.1) growing = false;
        } else {
          scale -= 0.01;
          if (scale <= 1) growing = true;
        }
        
        iconRef.current.style.transform = `scale(${scale})`;
      }
      animationId = requestAnimationFrame(animateIcon);
    };
    
    animationId = requestAnimationFrame(animateIcon);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="premium-container">
      <header className="header">
        <div className="logo">EventLingo</div>
        <div className="language-selector">SITE LANGUAGE: ENGLISH</div>
      </header>
      
      <div className="main-content">
        <div className="animation-area">
          <div className="animation-placeholder">
            <div className="icon" ref={iconRef}>🎉</div>
            <p>Event Visual Content Area</p>
          </div>
        </div>
        
        <div className="text-content">
<h2 className="tagline">
Host Your Event Virtually
</h2>

<div className="cta-buttons">
  <button className="cta-button primary" onClick={(e) => { e.preventDefault(); /* Add your action here */ }}>
    GET STARTED
  </button>
  <button className="cta-button secondary" onClick={(e) => { e.preventDefault(); /* Add your action here */ }}>
    I ALREADY HAVE AN ACCOUNT
  </button>
</div>


</div>
</div>
</div>
);
};

export default EventLingo;