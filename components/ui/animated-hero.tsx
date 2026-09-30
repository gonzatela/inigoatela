"use client";
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const titles = ['aprender mejor.', 'pensar mejor.', 'decidir mejor.'];
export function Hero({ base }: { base: string }) {
  const [titleNumber, setTitleNumber] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || titleNumber === titles.length - 1) return;
    const timeout = window.setTimeout(() => setTitleNumber(n => n + 1), 2400);
    return () => window.clearTimeout(timeout);
  }, [titleNumber, reduced]);
  return <section className="hero">
    <div className="hero-copy"><p className="eyebrow"><span /> UN ESPACIO PARA LA CURIOSIDAD</p>
      <h1>Ideas para<br /><span className="sr-only">aprender, pensar y decidir mejor.</span><span className="rotating-title" aria-hidden="true">
        {titles.map((title, index) => <motion.span key={title} initial={false} animate={{ opacity: (reduced ? index === 0 : titleNumber === index) ? 1 : 0, y: (reduced ? index === 0 : titleNumber === index) ? 0 : 30 }} transition={{ duration: reduced ? 0 : 0.55 }}>{title}</motion.span>)}
      </span></h1>
      <p className="hero-description">Soy Íñigo Atela. Escribo sobre aprendizaje, decisiones y cómo llevar las buenas ideas a la práctica.</p>
      <div className="hero-actions"><Button asChild><a href={`${base}articulos/`}>Explorar artículos <ArrowRight size={16} /></a></Button><a className="text-link" href={`${base}sobre-mi/`}>Un poco sobre mí <ArrowUpRight size={16} /></a></div>
    </div>
    <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-dot" />
      <div className="book"><div className="book-top">EL CUADERNO DE ÍÑIGO ATELA <span>01 / ∞</span></div><div className="book-title">Siempre<br />hay algo<br /><em>por aprender.</em></div><div className="book-line" /><div className="book-bottom">NOTAS, PREGUNTAS<br />Y ALGUNA BUENA IDEA.<span>ía.</span></div></div>
      <span className="art-caption">La curiosidad como punto de partida.</span>
    </div>
  </section>;
}
