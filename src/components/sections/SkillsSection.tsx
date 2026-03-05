'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Database, Smartphone, Webhook } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const skills = [
    { name: 'React/Next.js', level: 95, icon: Code2, color: '#00f5ff' },
    { name: 'TypeScript', level: 90, icon: Terminal, color: '#ff00ff' },
    { name: 'Node.js', level: 85, icon: Cpu, color: '#00ff00' },
    { name: 'Arquitetura de BD', level: 80, icon: Database, color: '#ffff00' },
    { name: 'Dev Mobile', level: 75, icon: Smartphone, color: '#ff0055' },
    { name: 'DevOps & Cloud', level: 85, icon: Webhook, color: '#0055ff' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 px-4 relative bg-[#020205] border-t border-[#00f5ff]/20">
      {/* HUD Accents */}
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-[#00f5ff]/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-[#ff00ff]/50 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-[#00f5ff] pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider font-orbitron">
            <span className="text-[#00f5ff] mr-2">01.</span> SISTEMAS_NUCLEARES
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm max-w-xl">
            &gt; Analisando capacidades técnicas e conexões neurais... <br />
            &gt; Métricas de proficiência adquiridas com sucesso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-black border border-gray-800 cyber-container group-hover:border-[#00f5ff]/50 transition-colors">
                      <Icon className="w-6 h-6" style={{ color: skill.color }} />
                    </div>
                    <h3 className="text-xl font-bold tracking-wide text-white font-orbitron uppercase">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold font-mono" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-[#101018] rounded-none overflow-hidden border border-gray-800 relative">
                  {/* Dynamic Progress Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                    className="h-full relative"
                    style={{ background: skill.color }}
                  >
                    {/* Glowing effect inside bar */}
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </motion.div>

                  /* Grid Overlay on top of the bar to make it look like a meter */
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDEwTDAgMEw0IDBWMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAyMDIwNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50"></div>
                </div>

                {/* Decorative Tech Details beneath bar */}
                <div className="flex justify-between mt-2 text-[10px] text-gray-600 font-mono uppercase">
                  <span>ID_SIS: {mounted ? Math.random().toString(36).substring(7) : 'CARR...'}</span>
                  <span>STATUS: IDEAL</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};