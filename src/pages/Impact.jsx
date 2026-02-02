import React from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    title: "Productivity Boost",
    value: "10× Efficiency",
    percent: 90,
    desc: "Accelerating repetitive and heavy industrial workflows.",
  },
  {
    title: "Operational Continuity",
    value: "24/7 Workforce",
    percent: 100,
    desc: "Humanoids never fatigue, enabling constant uptime.",
  },
  {
    title: "Safety Reliability",
    value: "99.8% Trusted",
    percent: 85,
    desc: "Advanced safety layers for human collaboration.",
  },
  {
    title: "Scalable Deployment",
    value: "1000+ Units Ready",
    percent: 75,
    desc: "Future-ready robotics built for global industries.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-black text-white">
      
      {/* ✅ Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-widest">
          HumanXai Impact
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Real measurable transformation across productivity, safety, and the
          future workforce.
        </p>
      </div>

      {/* ✅ Interactive Impact Bars */}
      <div className="max-w-5xl mx-auto space-y-8">
        {impacts.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              group relative p-6 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              overflow-hidden
              cursor-pointer
            "
          >
            {/* ✅ Title + Value */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold tracking-wide">
                {item.title}
              </h3>
              <span className="text-cyan-400 font-semibold">
                {item.value}
              </span>
            </div>

            {/* ✅ Progress Bar */}
            <div className="mt-4 w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.percent}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-cyan-400 rounded-full"
              />
            </div>

            {/* ✅ Hidden Description Appears on Hover */}
            <p
              className="
                mt-4 text-gray-400 text-sm leading-relaxed
                opacity-0 max-h-0
                group-hover:opacity-100 group-hover:max-h-20
                transition-all duration-500
              "
            >
              {item.desc}
            </p>

            {/* ✅ Neon Hover Glow */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                transition duration-500
              "
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
