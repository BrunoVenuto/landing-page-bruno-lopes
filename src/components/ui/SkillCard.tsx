'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-500" />
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
          />
        </div>
        <p className="text-purple-300 text-sm">{level}%</p>
      </div>
    </motion.div>
  );
};