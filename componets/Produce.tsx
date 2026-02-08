"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

/* ------------------ PRODUCTS (IMAGES) ------------------ */
const products = [
  {
    id: 1,
    title: "Fresh Table Fish",
    subtitle: "Catfish, Tilapia & Freshwater Species",
    img: "/fish.jpg",
    accent: "bg-blue-500/10 text-blue-700",
  },
  {
    id: 2,
    title: "Dry Catfish Fish",
    subtitle: "Catfish, Tilapia & Freshwater Species",
    img: "/judokofish.jpg",
    accent: "bg-blue-500/10 text-blue-700",
  },
  {
    id: 3,
    title: "Premium Fish Feed",
    subtitle: "Floating & Sinking Aquaculture Feed",
    img: "/fishfeed.jpg",
    accent: "bg-cyan-500/10 text-cyan-700",
  },
  {
    id: 4,
    title: "Farm Fresh Eggs",
    subtitle: "Nutritious, Hygienic & Daily Harvest",
    img: "/egg.jpg",
    accent: "bg-yellow-500/10 text-yellow-700",
  },
  {
    id: 5,
    title: "Healthy Chickens",
    subtitle: "Broilers & Layers for Meat & Breeding",
    img: "/chicken.jpg",
    accent: "bg-rose-500/10 text-rose-700",
  },
  {
    id: 6,
    title: "Chicken Feed Supply",
    subtitle: "Starter, Grower & Finisher Feeds",
    img: "/chickfeed.jpg",
    accent: "bg-amber-500/10 text-amber-700",
  },
];

const liveOperations = [
  {
    id: 1,
    title: "Fish Feeding",
    video: "/judo.mp4",
  },
  {
    id: 2,
    title: "Pond Operations",
    video: "/pond.mp4",
  },
];

const Produce = () => {
  return (
    <section id="produce" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-[#A87C51] font-bold uppercase tracking-widest text-md">
            Our Products
          </h2>
          <h3 className="text-3xl md:text-6xl font-serif text-stone-800 leading-tight">
            Reliable supply from our <br />
            <span className="italic text-[#2D5A27]">fish & poultry farms.</span>
          </h3>
        </div>

        {/* ---------- PRODUCT GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          {products.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all border border-stone-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all shadow-xl">
                  <HiOutlineArrowRight size={20} />
                </div>
              </div>

              <div className="px-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${item.accent}`}
                >
                  In Stock
                </span>
                <h4 className="text-3xl font-serif text-stone-800 group-hover:text-[#2D5A27] transition-colors">
                  {item.title}
                </h4>
                <p className="text-stone-400 font-light italic">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-32">
          <h3 className="text-2xl md:text-4xl font-serif text-stone-800 mb-10 text-center lg:text-left">
            <span className="italic text-[#2D5A27]">Operations</span>  In Action
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {liveOperations.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group"
              >
                <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-100">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute bottom-8 left-8">
                    
                    <h4 className="text-2xl font-serif text-white">
                      {item.title}
                    </h4>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       
        <div className="mt-24 border-t border-stone-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-stone-500 font-light max-w-sm">
            Supplying restaurants, markets, and large-scale buyers with
            consistent quality products.
          </p>
          <Link
            href="/fish"
            className="text-[#2D5A27] font-bold flex items-center gap-2 group border-b-2 border-[#2D5A27]/20 pb-1 hover:border-[#2D5A27]"
          >
            Request Price List
            <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Produce;
