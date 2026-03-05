'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppCTA: React.FC = () => {
    const phoneNumber = '5531995453632'; // Brazil country code 55 + number
    const message = 'Olá Lopes! Preciso de um orçamento para um projeto.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex items-center group cursor-pointer"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
            >
                {/* Hover Message Reveal */}
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0 pr-2">
                    <div className="bg-[#050510] border border-[#00f5ff]/50 px-4 py-2 text-[#00f5ff] text-sm font-mono tracking-widest shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                        &gt; REQUEST_QUOTE
                    </div>
                </div>

                {/* Pulse Effect Container */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                    <div className="absolute inset-0 bg-[#00f5ff] rounded-none opacity-20 blur-xl animate-pulse"></div>

                    {/* Main Button */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#101018] to-[#050510] border-2 border-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.3)] cyber-container flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#00f5ff]/10 transition-all duration-300">
                        {/* Small Corner Accents for Cyberpunk Feel */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ff00ff]"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ff00ff]"></div>

                        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-[#00f5ff] group-hover:text-white transition-colors" />
                    </div>
                </div>
            </a>
        </motion.div>
    );
};
