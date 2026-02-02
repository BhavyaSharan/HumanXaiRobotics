import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    title: "Healthcare Assistance",
    desc: "Humanoid robots supporting hospitals, elderly care, and patient monitoring with empathy and precision.",
    image: "🩺",
  },
  {
    title: "Warehouse & Logistics",
    desc: "Automation robots built for lifting, sorting, packaging, and high-efficiency warehouse workflows.",
    image: "📦",
  },
  {
    title: "Construction Support",
    desc: "Designed for harsh environments to assist workers in infrastructure, heavy labor, and onsite operations.",
    image: "🏗️",
  },
  {
    title: "Rescue & Defense Missions",
    desc: "Autonomous mission robots capable of operating in dangerous, unpredictable, and high-risk zones.",
    image: "🚨",
  },
];

const UseCasesInteractive = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 px-6 md:px-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ✅ LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-widest">
            Industry Applications
          </h2>

          <p className="mt-5 md:mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
            HumanXai humanoids are built for real industries — transforming
            healthcare, logistics, construction, and mission-critical work.
          </p>

          {/* ✅ Interactive Menu */}
          <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
            {industries.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`cursor-pointer transition duration-300 border-l-4 pl-4 md:pl-5
                  ${
                    active === index
                      ? "border-cyan-400 text-white"
                      : "border-white/10 text-gray-500"
                  }
                `}
              >
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ RIGHT SIDE INTERACTIVE DISPLAY */}
        <div className="relative h-[320px] sm:h-[360px] md:h-[380px] flex items-center justify-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-sm sm:max-w-md px-2"
            >
              {/* ✅ Icon / Visual */}
              <div className="text-6xl sm:text-7xl mb-6 sm:mb-8">
                {industries[active].image}
              </div>

              {/* ✅ Active Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {industries[active].title}
              </h3>

              {/* ✅ Active Description */}
              <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
                {industries[active].desc}
              </p>

              {/* ✅ CTA Button */}
              <button
                className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 rounded-full bg-cyan-500/20 
                border border-cyan-400/40 hover:bg-cyan-500/30 transition text-sm sm:text-base"
              >
                Explore Use Case →
              </button>
            </motion.div>
          </AnimatePresence>

          {/* ✅ Glow Background */}
          <div className="absolute inset-0 blur-3xl bg-cyan-500/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesInteractive;
