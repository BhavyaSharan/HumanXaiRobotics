import React from "react";
import Navbar from "../components/Navbar";

const robotParts = [
  {
    title: "AI Vision System",
    desc: "High precision cameras + LiDAR sensors for environment awareness.",
  },
  {
    title: "Humanoid Arms",
    desc: "Dexterous robotic arms capable of lifting and complex manipulation.",
  },
  {
    title: "Autonomous Core",
    desc: "Decision-making AI brain powered by deep learning and LLM agents.",
  },
  {
    title: "Mobility & Balance Legs",
    desc: "Advanced locomotion system for stable movement in human environments.",
  },
  {
    title: "Safety & Control Layer",
    desc: "Built-in safety constraints for trusted human-robot collaboration.",
  },
  {
    title: "Energy Module",
    desc: "Long-lasting battery and power optimization for 24/7 operations.",
  },
];

const RobotsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-8 md:px-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-widest leading-tight">
          Robot Components
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          Explore the advanced modular parts that power HumanXai humanoid robotics.
        </p>
      </section>

      {/* ✅ Parts Section */}
      <section
        className="
          max-w-7xl mx-auto
          grid gap-6 sm:gap-8 md:gap-10
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          px-4 sm:px-8 md:px-16
          pb-20
        "
      >
        {robotParts.map((part, index) => (
          <div
            key={index}
            className="
              p-6 sm:p-8
              rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl
              hover:border-cyan-400/40
              hover:scale-[1.02]
              transition duration-300
            "
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              {part.title}
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {part.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RobotsPage;
