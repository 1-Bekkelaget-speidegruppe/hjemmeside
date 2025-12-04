"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "flokk" | "tropp" | "rover";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold uppercase tracking-wider cursor-pointer text-sm transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary: "bg-primary text-white hover:shadow-xl hover:shadow-primary/20",
    secondary: "bg-white text-primary border-2 border-white hover:shadow-xl",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    flokk:
      "bg-smaspeider text-black hover:shadow-xl hover:shadow-smaspeider/40",
    tropp: "bg-stifinner text-white hover:shadow-xl hover:shadow-stifinner/40",
    rover: "bg-rover text-white hover:shadow-xl hover:shadow-rover/40",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const buttonContent = (
    <>
      {/* Shimmer effect */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <MotionLink
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {buttonContent}
    </motion.button>
  );
}
