"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'flokk' | 'tropp' | 'rover';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold uppercase tracking-wider cursor-pointer text-sm shadow-sm";
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-primary border-2 border-white",
    outline: "bg-transparent border-2 border-primary text-primary",
    flokk: "bg-smaspeider text-black",
    tropp: "bg-stifinner text-white",
    rover: "bg-rover text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const hoverAnimation = {
    rotate: [0, -2, 2, -1, 1, 0],
    transition: { duration: 0.4 }
  };

  if (href) {
    return (
      <MotionLink 
        href={href}
        className={combinedClassName}
        whileHover={hoverAnimation}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      onClick={onClick} 
      className={combinedClassName}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
