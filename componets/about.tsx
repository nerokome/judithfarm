"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiSeedlingLine, RiShieldCheckLine, RiEarthLine } from "react-icons/ri";

const About = () => {
  const features = [
    {
      icon: <RiSeedlingLine />,
      title: "Healthy Rearing",
      desc: "Controlled feeding and clean water systems.",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      icon: <RiShieldCheckLine />,
      title: "Quality Assurance",
      desc: "Strict hygiene and farm-to-market standards.",
      color: "text-orange-600 bg-orange-50",
    },
  ];

  return (
    <section
      id="about" // <-- added ID for navbar scrolling
      className="py-20 lg:py-32 bg-[#FBFBFA] overflow-hidden scroll-mt-32" // scroll margin for fixed navbar
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 space-y-8"
        >
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-[#A87C51] font-bold uppercase tracking-widest text-md">
              Who We Are
            </h2>

            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
              Built on fish farming <br />
              <span className="italic text-[#2D5A27]">
                and poultry production.
              </span>
            </h3>

            <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              We are a focused agricultural operation specializing in fish
              farming and poultry production. From fresh table fish and
              nutritious fish feed to healthy chickens, quality eggs, and
              reliable poultry feed, our farms are designed for consistency,
              safety, and scale.
            </p>

            <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Every stage feeding, growth, and handling is carefully managed
              to deliver products that meet the needs of households, retailers,
              and bulk buyers.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-stone-100 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${f.color}`}
                >
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-sm">{f.title}</h4>
                  <p className="text-xs text-stone-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start pt-4">
            <button className="bg-[#2D5A27] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-green-900/20 hover:bg-[#1a3617] transition-all active:scale-95">
              View Our Operations
            </button>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <div className="order-2 flex justify-center relative mt-10 lg:mt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] md:inset-[-15px] border-2 border-dashed border-[#2D5A27]/20 rounded-full"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-full rounded-full overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl z-10"
            >
              <Image
                src="/frame4.jpg"
                alt="Fish and poultry farm operations"
                fill
                className="object-cover scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -left-4 md:-bottom-4 md:-left-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20 border border-stone-50"
            >
              <p className="text-2xl md:text-3xl font-serif text-[#2D5A27] font-bold">
                Reliable
              </p>
              <p className="text-[9px] md:text-md text-stone-400 mt-1 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Supply <br /> Chain
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute top-2 -right-2 md:top-0 md:-right-4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg z-20 border border-white"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2D5A27] rounded-lg md:rounded-xl flex items-center justify-center text-white">
                <RiEarthLine size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
