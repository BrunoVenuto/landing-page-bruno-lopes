// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lopes - Full Stack Developer | Cyberpunk Portfolio',
  description: 'Portfólio cyberpunk de desenvolvedor full stack especializado em tecnologias modernas',
}

import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-rajdhani bg-black text-white overflow-x-hidden">
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  )
}