"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const collections = [
  {
    id: 1,
    title: "Fresh Table Fish",
    subtitle: "Catfish, Tilapia & Freshwater Species",
    img: "/fish.jpg",
    accent: "bg-blue-500/10 text-blue-700",
  },
  {
    id: 2,
    title: "Premium Fish Feed",
    subtitle: "Floating & Sinking Aquaculture Feed",
    img: "/fish-feed.jpg",
    accent: "bg-cyan-500/10 text-cyan-700",
  },
  {
    id: 3,
    title: "Farm Fresh Eggs",
    subtitle: "Nutritious, Hygienic & Daily Harvest",
    img: "/eggs.jpg",
    accent: "bg-yellow-500/10 text-yellow-700",
  },
  {
    id: 4,
    title: "Healthy Chickens",
    subtitle: "Broilers & Layers for Meat & Breeding",
    img: "/chicken.jpg",
    accent: "bg-rose-500/10 text-rose-700",
  },
  {
    id: 5,
    title: "Chicken Feed Supply",
    subtitle: "Starter, Grower & Finisher Feeds",
    img: "/chicken-feed.jpg",
    accent: "bg-amber-500/10 text-amber-700",
  },
];

const Produce = () => {
  return (
    <section id="produce" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-[#A87C51] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            Our Products
          </h2>
          <h3 className="text-5xl md:text-6xl font-serif text-stone-800 leading-tight">
            Reliable supply from our <br />
            <span className="italic text-[#2D5A27]">fish & poultry farms.</span>
          </h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collections.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700 border border-stone-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                {/* Arrow */}
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                  <HiOutlineArrowRight size={20} />
                </div>
              </div>

              {/* Text */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${item.accent}`}
                  >
                    In Stock
                  </div>
                  <h4 className="text-3xl font-serif text-stone-800 group-hover:text-[#2D5A27] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-stone-400 font-light mt-1 italic">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-stone-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-stone-500 font-light max-w-sm">
            Supplying restaurants, markets, and large-scale buyers with
            consistent quality products.
          </p>
          <button className="text-[#2D5A27] font-bold flex items-center gap-2 group border-b-2 border-[#2D5A27]/20 pb-1 hover:border-[#2D5A27] transition-all">
            Request Price List
            <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Produce;
