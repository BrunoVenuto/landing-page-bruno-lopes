'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  index: number;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ 
  icon: Icon, 
  label, 
  href, 
  index 
}) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-0 group-hover:opacity-75 transition-all duration-500" />
      <div className="relative p-4 bg-gray-900 border-2 border-purple-500/50 rounded-full hover:border-pink-500 transition-all duration-300">
        <Icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      </div>
    </motion.a>
  );
};