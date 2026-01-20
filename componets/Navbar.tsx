"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX, HiOutlineShoppingBag } from 'react-icons/hi'; // Heroicons set
import { RiLeafLine } from 'react-icons/ri'; // Remix Icon set
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Produce', href: '/produce' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Journal', href: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
      scrolled ? 'top-2' : 'top-0'
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/40 rounded-3xl px-8 py-3' 
          : 'bg-transparent px-4 py-4'
      }`}>
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#2D5A27] p-2 rounded-xl group-hover:rotate-[15deg] transition-transform duration-300">
              <RiLeafLine size={22} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-stone-800 uppercase">
              Terra<span className="text-[#2D5A27]">form</span>
            </span>
          </Link>

          {/* Desktop Nav */}
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

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2.5 text-stone-600 hover:bg-stone-100 rounded-full transition-colors">
              <HiOutlineShoppingBag size={22} />
            </button>
            <button className="bg-[#2D5A27] text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-[#1f3f1b] hover:shadow-[0_10px_20px_rgba(45,90,39,0.2)] transition-all active:scale-95">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-24 left-6 right-6 bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 p-10 flex flex-col space-y-8 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-stone-800 hover:text-[#2D5A27] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-[1px] bg-stone-100 w-full" />
            <button className="bg-[#2D5A27] text-white w-full py-5 rounded-2xl font-bold text-lg shadow-lg shadow-green-900/10">
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;