"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiMailLine, 
  RiMapPinLine, 
  RiTimeLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterXLine
} from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FBFBFA] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-[#A87C51] font-bold uppercase tracking-widest text-md">
            Connect With Us
          </h2>
          <h3 className="text-5xl md:text-6xl font-serif text-stone-800 leading-tight">
            Let’s start a <span className="italic text-[#2D5A27]">conversation.</span>
          </h3>
          <p className="text-stone-500 mt-6 text-lg font-light leading-relaxed">
            Whether you are interested in wholesale supply, a farm visit, or just want 
            to talk about sustainable agriculture, our gates are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Contact Info */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-12">
            {/* Info Cards */}
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center text-[#2D5A27]">
                  <RiMapPinLine size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Visit The Farm</h4>
                  <p className="text-stone-500 font-light leading-snug">
                    1242 ,<br />
                    Warri, Delta State 90210
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center text-[#2D5A27]">
                  <RiMailLine size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Email Us</h4>
                  <p className="text-stone-500 font-light">judithfarmandfeeds@gmai.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center text-[#2D5A27]">
                  <RiTimeLine size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Farm Hours</h4>
                  <p className="text-stone-500 font-light">Mon — Sat: 8am - 5pm</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-stone-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-6">Socials</p>
              <div className="flex gap-4">
                {[<RiInstagramLine />, <RiFacebookCircleLine />, <RiTwitterXLine />].map((icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#2D5A27] hover:text-white hover:border-[#2D5A27] transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2 bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-stone-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Full Name</label>
                  <input type="text" placeholder="Fullname" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Email Address</label>
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:bg-white transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Inquiry Type</label>
                <select className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:bg-white transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Wholesale Supply</option>
                  <option>Farm Visit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:bg-white transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-[#2D5A27] text-white py-5 rounded-2xl font-bold shadow-xl shadow-green-900/20 hover:bg-[#1f3f1b] transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
