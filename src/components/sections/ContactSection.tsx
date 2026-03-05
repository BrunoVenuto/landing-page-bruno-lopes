'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal, Fingerprint } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 md:py-24 px-4 relative bg-[#020205] border-t border-[#ff00ff]/20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-5 pointer-events-none">
        <Fingerprint className="w-full h-full text-[#ff00ff]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider font-orbitron mb-4">
            <span className="text-[#00f5ff]">03.</span> INICIAR_CONTATO
          </h2>
          <p className="text-[#ff00ff] font-mono animate-pulse">
            &lt; CANAL_COM_ABERTO /&gt;
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 cyber-terminal p-1 font-mono"
          >
            <div className="bg-[#050510] h-full p-4 sm:p-8 border border-gray-800">
              <div className="flex items-center gap-2 mb-8 border-b border-gray-800 pb-4">
                <Terminal className="w-5 h-5 text-[#00f5ff]" />
                <span className="text-gray-400 text-sm">root@node-01:~# ./transmitir_msg.sh</span>
              </div>

              {isSuccess ? (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-[#00ff00] text-xl font-bold">&gt; TRANSMISSÃO BEM-SUCEDIDA</p>
                  <p className="text-gray-400 text-sm">Dados criptografados e enviados ao servidor principal.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-[#00f5ff] text-xs mb-2 uppercase opacity-80 group-focus-within:opacity-100">
                      &gt; Inserir_Identificador
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-800 text-white p-2 focus:border-[#00f5ff] focus:outline-none focus:bg-[#00f5ff]/5 transition-all text-sm"
                      placeholder="ex: Neo"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-[#ff00ff] text-xs mb-2 uppercase opacity-80 group-focus-within:opacity-100">
                      &gt; Nó_Alvo (Email)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-800 text-white p-2 focus:border-[#ff00ff] focus:outline-none focus:bg-[#ff00ff]/5 transition-all text-sm"
                      placeholder="ex: the.one@matrix.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="group">
                    <label className="block text-[#00ff00] text-xs mb-2 uppercase opacity-80 group-focus-within:opacity-100">
                      &gt; String_Carga_Útil
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-2 border-gray-800 text-white p-3 focus:border-[#00ff00] focus:outline-none focus:bg-[#00ff00]/5 transition-all text-sm resize-none rounded-none"
                      placeholder="Insira o fluxo de dados aqui..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full mt-4"
                  >
                    {isSubmitting ? 'CRIPTOGRAFANDO...' : 'EXECUTAR_TRANSMISSÃO'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Connect Info Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8 flex flex-col justify-center"
          >
            <div className="p-6 border border-gray-800 bg-[#020205] relative group hover:border-[#00f5ff]/40 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5ff] to-[#ff00ff]"></div>
              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">LINK_DIRETO</h3>
              <p className="text-gray-400 font-mono text-sm mb-6">
                Estabelecer uma conexão neural direta através de canais seguros.
              </p>

              <div className="space-y-4 font-mono text-sm">
                <a href="mailto:brunovlviana41@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[#00f5ff] transition-colors p-3 bg-[#050510] border border-gray-800 hover:border-[#00f5ff]/30">
                  <Mail className="w-5 h-5" />
                  <span>brunovlviana41@gmail.com</span>
                </a>
                <a href="https://github.com/BrunoVenuto" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-3 bg-[#050510] border border-gray-800 hover:border-gray-500">
                  <Github className="w-5 h-5" />
                  <span>github.com/BrunoVenuto</span>
                </a>
                <a href="https://linkedin.com/in/BrunoLopes" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#0055ff] transition-colors p-3 bg-[#050510] border border-gray-800 hover:border-[#0055ff]/30">
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/BrunoLopes</span>
                </a>
              </div>
            </div>

            {/* Server Status Box */}
            <div className="p-4 border border-[#00ff00]/30 bg-[#00ff00]/5 flex items-center justify-between font-mono">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#00ff00] rounded-none animate-pulse"></div>
                <span className="text-[#00ff00] text-sm font-bold">STATUS DO NÓ</span>
              </div>
              <span className="text-gray-400 text-xs">AGUARDANDO ENTRADA...</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};