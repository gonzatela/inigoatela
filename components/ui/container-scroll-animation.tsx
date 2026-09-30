"use client";
import { useRef, type ReactNode } from 'react';
import { useScroll, useTransform, useReducedMotion, motion, type MotionValue } from 'framer-motion';
export function ContainerScroll({ titleComponent, children }: { titleComponent: ReactNode; children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'center center'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [35, 0]);
  return <div ref={containerRef} className="scroll-section"><div style={{ perspective: '1000px' }}>
    <Header translate={reduced ? undefined : translate} titleComponent={titleComponent} />
    <Card rotate={reduced ? undefined : rotate} scale={reduced ? undefined : scale}>{children}</Card>
  </div></div>;
}
export function Header({ translate, titleComponent }: { translate?: MotionValue<number>; titleComponent: ReactNode }) {
  return <motion.div style={{ translateY: translate }} className="scroll-heading">{titleComponent}</motion.div>;
}
export function Card({ rotate, scale, children }: { rotate?: MotionValue<number>; scale?: MotionValue<number>; children: ReactNode }) {
  return <motion.div style={{ rotateX: rotate, scale }} className="study-card">{children}</motion.div>;
}
