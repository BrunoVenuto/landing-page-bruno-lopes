'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  glowColor: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tech,
  glowColor,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${glowColor} rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-all duration-500`} />
      
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300">
        <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-6xl text-purple-400/50"
          >
            {'<>'}
          </motion.div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((techItem) => (
              <motion.span 
                key={techItem}
                whileHover={{ scale: 1.1 }}
                className="px-2 py-1 bg-purple-500/20 border border-purple-500/50 rounded text-xs text-purple-300"
              >
                {techItem}
              </motion.span>
            ))}
          </div>
          
          <div className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg text-sm font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 inline mr-2" />
              Ver Projeto
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};