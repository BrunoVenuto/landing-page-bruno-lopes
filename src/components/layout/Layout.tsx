'use client';

import React from 'react';
import { MatrixBackground } from '../effects/MatrixBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <MatrixBackground />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};