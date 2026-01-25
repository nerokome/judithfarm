"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { HiMenuAlt3, HiX, HiOutlineShoppingBag } from "react-icons/hi";
import { RiLeafLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname(); 

  
  if (pathname === "/fish") return null;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Produce", href: "/#produce" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-6 ${
        scrolled ? "top-1" : "top-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/40 rounded-3xl px-8 py-3"
            : "bg-transparent px-4 py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          
          <Link href="/#home" className="flex items-center gap-2 group">
            <div className="bg-[#2D5A27] p-2 rounded-xl group-hover:rotate-[15deg] transition-transform duration-300">
              <RiLeafLine size={22} className="text-white" />
            </div>
            <span className="text-md sm:text-xl font-bold tracking-tighter text-stone-800 uppercase">
              Juduko Farms and <span className="text-[#2D5A27]">Feeds</span>
            </span>
          </Link>

          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-stone-500 hover:text-[#2D5A27] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4A261] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2.5 text-stone-600 hover:bg-stone-100 rounded-full transition-colors">
              <HiOutlineShoppingBag size={22} />
            </button>
            <Link
              href="/#contact"
              className="bg-[#2D5A27] text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-[#1f3f1b] transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-24 left-6 right-6 bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 p-10 flex flex-col space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-stone-800 hover:text-[#2D5A27]"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-[1px] bg-stone-100 w-full" />

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#2D5A27] text-white w-full py-5 rounded-2xl font-bold text-lg text-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
