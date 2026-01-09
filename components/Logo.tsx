import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Orange (Bottom) */}
      <rect x="25" y="80" width="70" height="20" rx="6" fill="#ffa55b" />
      
      {/* Cyan (Wide) */}
      <rect x="10" y="60" width="100" height="20" rx="10" fill="#8ffbff" />
      
      {/* Pink (Middle) */}
      <rect x="25" y="40" width="70" height="20" rx="6" fill="#fa8ace" />
      
      {/* Yellow (Wide) */}
      <rect x="10" y="20" width="100" height="20" rx="10" fill="#ffe371" />
      
      {/* Green (Top Tab) */}
      <rect x="35" y="0" width="50" height="20" rx="8" fill="#c1ff72" />
    </svg>
  );
};