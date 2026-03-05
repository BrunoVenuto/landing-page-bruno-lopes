'use client';

import React, { useState, useEffect } from 'react';

export const MatrixBackground: React.FC = () => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    setMatrixChars(chars.split(''));
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse text-green-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            fontSize: `${10 + Math.random() * 20}px`
          }}
        >
          {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
        </div>
      ))}
    </div>
  );
};