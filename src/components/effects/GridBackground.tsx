'use client';

import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};