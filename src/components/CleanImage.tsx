"use client";

import { motion } from 'framer-motion';

interface CleanImageProps {
  src?: string;
  alt?: string;
  className?: string;
  delay?: number;
}

export default function CleanImage({ src, alt = "Image", className = "", delay = 0 }: CleanImageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-lg shadow-md ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
          {alt}
        </div>
      )}
    </motion.div>
  );
}
