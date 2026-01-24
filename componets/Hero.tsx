"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { RiLeafLine } from "react-icons/ri";

const images = ["/frame1.jpg", "/frame2.jpg", "/frame3.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((p) => (p + 1) % images.length);
  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home" // <-- added ID for navbar scrolling
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FBFBFA] pt-28 pb-12 lg:pt-0 lg:pb-0 scroll-mt-32" // scroll margin for fixed navbar
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-full lg:w-[40%] h-[30%] lg:h-[40%] bg-[#2D5A27]/5 blur-[80px] lg:blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#2D5A27]/5">
            <RiLeafLine size={14} />
            Fish & Poultry Farming
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-stone-800 leading-[1.1] mb-6 tracking-tight">
            Supplying fish <br />
            <span className="italic text-[#2D5A27] relative inline-block">
              and poultry
              <svg
                className="absolute -bottom-2 left-0 w-full opacity-60"
                viewBox="0 0 300 20"
                fill="none"
              >
                <path
                  d="M5 15C50 5 150 5 295 15"
                  stroke="#F4A261"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base md:text-lg text-stone-500 max-w-lg mb-8 leading-relaxed font-light">
            We specialize in fish farming and poultry production — supplying
            fresh table fish, quality fish feed, healthy chickens, farm-fresh
            eggs, and reliable poultry feed to households, retailers, and bulk
            buyers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group bg-[#2D5A27] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-green-900/20 hover:bg-[#1f3f1b] transition-all active:scale-95">
              View Our Products
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-2xl font-bold border-2 border-stone-200 bg-white hover:bg-stone-50 transition-all text-stone-700">
              Our Operations
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="relative w-full">
          <div className="relative w-[90vw] max-w-md mx-auto h-[260px] sm:h-[380px] lg:h-auto lg:w-full lg:max-w-none lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden border-[3px] sm:border-[5px] lg:border-[10px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] lg:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.15)]">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt="Fish and poultry farm"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-5 left-5 flex gap-2 z-30">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all ${
                    current === i ? "w-8 bg-white" : "w-3 bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-30">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-xl"
              >
                <HiOutlineArrowLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white/20 backdrop-blur border border-white/30 text-white rounded-xl"
              >
                <HiOutlineArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
