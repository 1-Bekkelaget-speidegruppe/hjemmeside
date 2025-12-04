"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only the homepage has the full-screen hero with dark background
  const isHeroPage = pathname === "/";

  // Use dark text when: scrolled OR not on a hero page
  const useDarkText = scrolled || !isHeroPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/om-oss" },
    { name: "Avdelinger", href: "/avdelinger" },
    { name: "Bli med", href: "/bli-med" },
    { name: "Bilder", href: "/bilder" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useDarkText
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/logo-speiderne.png"
                alt="Logo"
                className="h-12 w-auto drop-shadow-md"
              />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg tracking-tight transition-colors ${
                  useDarkText ? "text-primary" : "text-white"
                }`}
              >
                <span className="hidden sm:inline">1. Bekkelaget</span>
                <span className="sm:hidden">1. Bekkelaget</span>
              </span>
              <span
                className={`text-xs uppercase tracking-wider hidden sm:block transition-colors ${
                  useDarkText ? "text-gray-500" : "text-white/70"
                }`}
              >
                Speidergruppe
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all group ${
                    useDarkText
                      ? "text-gray-600 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  } ${
                    pathname === link.href
                      ? useDarkText
                        ? "text-primary"
                        : "text-smaspeider"
                      : ""
                  }`}
                >
                  {link.name}
                  {/* Active/hover indicator */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 rounded-full transition-all bg-smaspeider"
                    initial={{ width: 0, x: "-50%" }}
                    animate={{
                      width: pathname === link.href ? "60%" : 0,
                      x: "-50%",
                    }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/bli-med"
                className="ml-4 px-5 py-2.5 bg-smaspeider text-black font-bold text-sm uppercase rounded-full hover:bg-smaspeider/90 transition-all hover:shadow-lg hover:shadow-smaspeider/30 hover:scale-105"
              >
                Bli speider
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                useDarkText
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-bold uppercase transition-all ${
                      pathname === link.href
                        ? "text-primary bg-smaspeider/10"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/bli-med"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-smaspeider text-black font-bold uppercase rounded-xl hover:bg-smaspeider/90 transition-all"
                >
                  Bli speider i dag! 🏕️
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
