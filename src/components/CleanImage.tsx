"use client";

import { motion } from "framer-motion";

interface CleanImageProps {
  src?: string;
  alt?: string;
  className?: string;
  delay?: number;
}

export default function CleanImage({
  src,
  alt = "Image",
  className = "",
  delay = 0,
}: CleanImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={`relative overflow-hidden group ${className}`}
    >
      {src ? (
        <>
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
          {alt}
        </div>
      )}
    </motion.div>
  );
}
