"use client";

import Button from "./Button";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  // Split title into words for stagger animation
  const words = title.split(" ");

  return (
    <div className="relative bg-primary text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - static for performance */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Speidere på tur"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/40 to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30"></div>
      </div>

      {/* Subtle gradient orb - CSS animation only */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-smaspeider/20 via-vandrer/10 to-transparent blur-3xl opacity-40 animate-pulse"
        style={{ left: "60%", top: "20%" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-smaspeider animate-pulse"></span>
          <span className="text-sm font-medium text-white/90 uppercase tracking-wider">
            Norges Speiderforbund
          </span>
        </motion.div>

        {/* Animated Title with word stagger */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight uppercase drop-shadow-2xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-2xl lg:text-3xl mb-10 md:mb-14 text-white/90 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href={ctaLink}
              variant="flokk"
              className="text-base md:text-lg px-10 md:px-12 py-5 md:py-6 shadow-2xl shadow-smaspeider/30 animate-glow w-full sm:w-auto"
            >
              {ctaText}
            </Button>
            <Button
              href="/om-oss"
              variant="outline"
              className="text-base md:text-lg px-10 md:px-12 py-5 md:py-6 border-white/50 text-white hover:bg-white hover:text-primary glass w-full sm:w-auto"
            >
              Les mer om oss
            </Button>
          </motion.div>
        )}

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-16 md:mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "15+", label: "Speidere" },
            { value: "110+", label: "År med eventyr" },
            { value: "∞", label: "Minner" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-smaspeider mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - CSS animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-white/60 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 animate-bounce-subtle">
          <div className="w-1.5 h-1.5 bg-smaspeider rounded-full" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-grey to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
