"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Globe, ArrowRight } from "lucide-react";

// --- SEÇÃO PRINCIPAL (HERO) ---
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center bg-[#050505] overflow-hidden px-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-50" />
    
    <div className="relative z-10 max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest text-blue-500 border border-blue-500/30 rounded-full bg-blue-500/5 uppercase">
          Disponível em Luanda
        </span>
        
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8">
          O padrão ouro da sua <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            presença digital.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos empresas comuns em marcas digitais premium. Desenvolvimento de elite com foco em performance e conversão.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 w-full md:w-auto">
            Solicitar orçamento premium
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 w-full md:w-auto flex items-center gap-2">
            Ver projetos <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- SEÇÃO DE SERVIÇOS (BENTO GRID) ---
const Services = () => {
  const services = [
    { title: "Performance Radical", desc: "Sites que carregam instantaneamente.", icon: <Zap className="text-blue-500" />, size: "md:col-span-2" },
    { title: "Design de Elite", desc: "Estética inspirada em Big Techs.", icon: <Shield className="text-purple-500" />, size: "md:col-span-1" },
    { title: "Mobile First", desc: "Perfeito para smartphones.", icon: <Smartphone className="text-blue-500" />, size: "md:col-span-1" },
    { title: "SEO Estratégico", desc: "Apareça no topo das buscas.", icon: <Globe className="text-purple-500" />, size: "md:col-span-2" },
  ];

  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Engenharia de <span className="text-blue-500">Excelência</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className={`${s.size} p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-500`}>
              <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ESTRUTURA FINAL DA PÁGINA ---
export default function WebZenPage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <Services />
      <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm">
        © 2026 WebZen Digital. Luanda, Angola.
      </footer>
    </main>
  );
}