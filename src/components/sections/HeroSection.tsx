'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, TerminalSquare } from 'lucide-react';
import { GridBackground } from '../effects/GridBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050510]">
      <GridBackground />

      {/* HUD Overlays */}
      <div className="absolute top-8 left-8 text-[#00f5ff] text-xs font-mono opacity-50 hidden md:block">
        <p>VER_SISTEMA: 9.4.2</p>
        <p>STATUS_REDE: SEGURO</p>
        <p>USO_MEM: 42%</p>
      </div>
      <div className="absolute bottom-8 right-8 text-[#ff00ff] text-xs font-mono opacity-50 hidden md:block text-right">
        <p>INICIALIZANDO PROTOCOLOS...</p>
        <p>CONEXÃO ESTABELECIDA</p>
      </div>

      <div className="text-center z-10 space-y-12 max-w-4xl px-4">
        {/* Profile / Glitch Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48"
        >
          <div className="absolute inset-0 bg-[#00f5ff] opacity-20 blur-2xl rounded-full animate-pulse object-cover"></div>
          <div className="w-full h-full border-2 border-[#00f5ff] rounded-none cyber-container flex items-center justify-center relative bg-black/50">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff00ff]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff00ff]"></div>
            <TerminalSquare className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 text-[#00f5ff]" />
          </div>
        </motion.div>

        {/* Glitch Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white glitch-text-hq uppercase"
            data-text="BRUNO LOPES"
          >
            BRUNO LOPES
          </h1>
        </motion.div>

        {/* Terminal Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-4 font-mono"
        >
          <div className="inline-block bg-[#00f5ff]/10 border border-[#00f5ff]/30 px-6 py-2">
            <p className="text-[#00f5ff] text-lg sm:text-xl md:text-2xl font-bold tracking-widest uppercase">
              &gt; Full Stack Developer_
            </p>
          </div>
          <p className="text-[#e0e0e0] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Arquiteto de sistemas especializado em aplicações web de alta performance, integrações de inteligência artificial e tecnologias de ponta.
          </p>
        </motion.div>

        {/* Cyber Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
        >
          <button className="cyber-button w-full sm:w-auto">
            Iniciar_Projetos
          </button>
          <button className="cyber-button secondary w-full sm:w-auto">
            Estabelecer_Contato
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-70"
      >
        <ChevronDown className="w-10 h-10 text-[#00f5ff]" />
      </motion.div>
    </section>
  );
};