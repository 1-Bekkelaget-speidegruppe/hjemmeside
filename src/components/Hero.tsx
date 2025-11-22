"use client";

import Button from './Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative bg-primary text-white min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Speidere på tur" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-primary/90"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight uppercase drop-shadow-lg break-words"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-3xl mb-8 md:mb-12 text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
        >
          {subtitle}
        </motion.p>
        {ctaText && ctaLink && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href={ctaLink} variant="flokk" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 shadow-xl border-2 border-smaspeider w-full sm:w-auto">
              {ctaText}
            </Button>
            <Button href="/om-oss" variant="outline" className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Les mer om oss
            </Button>
          </motion.div>
        )}
      </div>

      {/* Bouncing Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
