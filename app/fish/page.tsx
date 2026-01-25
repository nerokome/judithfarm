"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { priceList } from "./pricelist";

type Variety = { type: string; price: string };
type Item = { name: string; image: string; varieties: Variety[] };
type SimpleItem = { type: string; price: string; image: string };

export default function PricesPage() {
  return (
    <section className="py-5 sm:py-5 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        
        <div className="flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2D5A27] text-white rounded-full hover:bg-[#1f3f1b] transition-colors"
          >
            <HiArrowLeft size={20} className="sm:text-xl" />
          </Link>
        </div>

        
        <header className="space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-stone-800">
           Current Offers
          </h1>
          <p className="text-stone-500 mt-1 sm:mt-2 max-w-full sm:max-w-xl text-sm sm:text-base">
            Current market prices for our fish, poultry, eggs, and feed.
          </p>
        </header>

        {/* CATEGORY SECTIONS */}
        <Category id="fish" title="Fish" items={priceList.fish} />
        <Category id="poultry" title="Poultry" items={priceList.poultry} />
        <SimpleCategory id="eggs" title="Eggs" items={priceList.eggs} />
        <SimpleCategory id="feed" title="Feed" items={priceList.feed} />

      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Category = ({ id, title, items }: { id: string; title: string; items: Item[] }) => (
  <section id={id}>
    <h2 className="text-2xl sm:text-3xl font-serif text-[#2D5A27] mb-8 sm:mb-12">{title}</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 lg:gap-20">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm"
        >
          <div className="relative h-48 sm:h-60 bg-stone-100">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>

          <div className="p-4 sm:p-8 space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-stone-800">{item.name}</h3>

            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              {item.varieties.map((v, idx) => (
                <li key={idx} className="flex justify-between text-stone-600">
                  <span>{v.type}</span>
                  <span className="font-semibold">{v.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SimpleCategory = ({ id, title, items }: { id: string; title: string; items: SimpleItem[] }) => (
  <section id={id}>
    <h2 className="text-2xl sm:text-3xl font-serif text-[#2D5A27] mb-8 sm:mb-12">{title}</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm"
        >
          <div className="relative h-40 sm:h-48 bg-stone-100">
            <Image src={item.image} alt={item.type} fill className="object-cover" />
          </div>

          <div className="p-4 sm:p-6 flex justify-between items-center text-sm sm:text-base">
            <span className="font-medium text-stone-700">{item.type}</span>
            <span className="font-bold text-stone-800">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
