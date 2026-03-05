'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "SaaS Barber Manager",
      description: "Sistema completo de gestão para barbearias, incluindo agendamentos, acompanhamento de clientes e insights financeiros.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "IMPLANTADO",
      link: "https://saas-barber-zeta.vercel.app/"
    },
    {
      id: 2,
      title: "Brutal Barber",
      description: "Landing page e sistema de agendamento de alto impacto com estética brutalista, criado para barbearias modernas.",
      tech: ["React", "Styled Components", "Vite"],
      status: "ATIVO",
      link: "https://brutal-barber.vercel.app/"
    },
    {
      id: 3,
      title: "Advogada Premium Template",
      description: "Template sofisticado e profissional de landing page construído especificamente para advogados parceiros e escritórios de advocacia.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      status: "AO VIVO",
      link: "https://advogada-landing-template.vercel.app/"
    },
    {
      id: 4,
      title: "Strong Catalog App",
      description: "Catálogo virtual de produtos com filtros rápidos e sistema de gerenciamento de categorias para integração em e-commerce.",
      tech: ["React", "TypeScript", "Context API"],
      status: "IMPLANTADO",
      link: "https://catalogo-strong.vercel.app/"
    },
    {
      id: 5,
      title: "Personal Finance Dashboard",
      description: "Aplicativo pessoal de rastreamento financeiro oferecendo relatórios precisos sobre receitas, despesas e metas de economia.",
      tech: ["Next.js", "Firebase", "Chart.js"],
      status: "ATIVO",
      link: "https://financas-bruno.vercel.app/"
    },
    {
      id: 6,
      title: "Oficina Pro",
      description: "Sistema de gestão inteligente para oficinas mecânicas, controlando ordens de serviço, estoque e fluxo de caixa.",
      tech: ["Next.js", "Tailwind CSS", "Prisma"],
      status: "IMPLANTADO",
      link: "https://oficina-pro-novo.vercel.app/"
    },
    {
      id: 7,
      title: "Burg Master",
      description: "Plataforma de delivery e cardápio digital interativo projetada especificamente para hamburguerias artesanais.",
      tech: ["React", "Node.js", "MongoDB"],
      status: "ATIVO",
      link: "https://burg-master.vercel.app/"
    },
    {
      id: 8,
      title: "Maria Eduarda Advocacia",
      description: "Landing page profissional de advocacia com design moderno e formulários de conversão focada em captação de clientes.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      status: "AO VIVO",
      link: "https://maria-eduarda-advogada.vercel.app/"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative bg-[#050510]">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 matrix-bg pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-r-4 border-[#ff00ff] pr-6 text-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider font-orbitron">
            <span className="text-[#ff00ff] mr-2">02.</span> PROTOCOLOS_ATIVOS
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm max-w-xl ml-auto">
            &gt; Acessando arquivos de projetos seguros... <br />
            &gt; Renderizando arquitetura funcional e bases de código.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="cyber-terminal p-6 sm:p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Terminal Header */}
              <div className="flex justify-between items-start mb-6 border-b border-[#00f5ff]/20 pb-4">
                <div className="flex items-center gap-3 text-[#00f5ff]">
                  <Terminal className="w-6 h-6" />
                  <span className="font-mono text-sm tracking-widest">{`PRJ_${project.id.toString().padStart(3, '0')}`}</span>
                </div>
                <div className="px-2 py-1 bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff] text-xs font-mono animate-pulse">
                  {project.status}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron group-hover:text-shadow-cyan transition-all">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm font-mono leading-relaxed mb-8 min-h-[4rem]">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs font-mono group-hover:border-[#ff00ff]/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Interaction Links (visible on hover or always in this theme) */}
              <div className="flex gap-4 border-t border-gray-800 pt-6 mt-auto">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#ff00ff] transition-colors font-mono text-sm">
                    <ExternalLink className="w-4 h-4" />
                    [ NÓ_AO_VIVO ]
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="cyber-button">
            Carregar_Mais_Arquivos
          </button>
        </motion.div>
      </div>
    </section>
  );
};