"use client";
import { cn } from '@/lib/utils';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
type HighlightDirection = 'left' | 'right' | 'top' | 'bottom';
interface TactileHighlightProps { children: ReactNode; className?: string; direction?: HighlightDirection; delay?: number; trigger?: 'auto' | 'hover' | 'inView' }
export function TactileHighlight({ children, className, direction = 'left', delay = 0.1, trigger = 'inView' }: TactileHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });
  const reduced = useReducedMotion();
  const isAnimated = reduced || trigger === 'auto' || (trigger === 'inView' && isInView);
  const variants: Variants = {
    hidden: { scaleX: direction === 'left' || direction === 'right' ? 0 : 1, scaleY: direction === 'top' || direction === 'bottom' ? 0 : 1, originX: direction === 'left' ? 0 : direction === 'right' ? 1 : 0.5, originY: direction === 'top' ? 0 : direction === 'bottom' ? 1 : 0.5, borderRadius: '12px' },
    visible: { scaleX: 1, scaleY: 1, borderRadius: '3px', transition: reduced ? { duration: 0 } : { type: 'spring', damping: 22, stiffness: 130, mass: 0.8, delay } },
    hover: { scale: 1.03, rotate: direction === 'left' ? -1.5 : direction === 'right' ? 1.5 : 0, borderRadius: '6px', transition: { type: 'spring', damping: 15, stiffness: 400 } },
  };
  return <motion.span ref={ref} className={cn('relative isolate inline-block whitespace-nowrap', className)} style={{ padding: '0 0.15em', margin: '0 -0.15em', backgroundColor: '#fff' }} initial="hidden" animate={isAnimated ? 'visible' : 'hidden'} whileHover={reduced ? undefined : trigger === 'hover' ? 'visible' : 'hover'}>
    <motion.span aria-hidden="true" variants={variants} className="absolute inset-0 z-0 bg-zinc-950 dark:bg-white" />
    <span className="relative z-10 text-white mix-blend-difference pointer-events-none">{children}</span>
  </motion.span>;
}
export default TactileHighlight;
