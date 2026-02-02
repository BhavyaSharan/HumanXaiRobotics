import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ✅ Import Video */
import heroVideo from "../assets/Hero2.mp4";

/* ✅ Import Robot Images */
import robot1 from "../assets/Robo1.png";
import robot2 from "../assets/Robo2.png";
import robot3 from "../assets/Robo3.png";

const robots = [
  {
    img: robot1,
    title: "AI Humanoid Assistant",
    desc: "Built for healthcare and human support with deep intelligence.",
  },
  {
    img: robot2,
    title: "Industrial Automation Bot",
    desc: "Robotics designed for factories, warehouses and smart production.",
  },
  {
    img: robot3,
    title: "Autonomous Mission Unit",
    desc: "Next-gen humanoids capable of fully independent decision-making.",
  },
];

const TechnologySection = () => {
  const { scrollY } = useScroll();
  const techParallax = useTransform(scrollY, [600, 1400], [100, -100]);

  /* ✅ Active robot index */
  const [current, setCurrent] = useState(0);

  /* ✅ Mobile Tap Info */
  const [showInfo, setShowInfo] = useState(false);

  /* ✅ Next / Prev */
  const nextRobot = () => {
    setCurrent((prev) => (prev + 1) % robots.length);
    setShowInfo(false);
  };

  const prevRobot = () => {
    setCurrent((prev) => (prev - 1 + robots.length) % robots.length);
    setShowInfo(false);
  };

  /* ✅ Swipe Support */
  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextRobot();
    if (endX - startX > 50) prevRobot();
  };

  return (
    <section className="relative py-24 px-6 md:px-20 text-white overflow-hidden">
      {/* ✅ Background Video */}
     {/* ✅ Responsive Background Video */}
<motion.video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  style={{ y: techParallax }}
  className="
    absolute top-0 left-0
    w-full h-full

    object-cover
    object-center

    min-h-full min-w-full

    pointer-events-none

    md:scale-105 scale-100
  "
>
  <source src={heroVideo} type="video/mp4" />
</motion.video>


      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/20"></div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col">
        {/* ✅ Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
            Powered by Future Technology
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
            HumanXai Robotics combines AI, humanoid engineering and autonomous
            systems to shape the future.
          </p>
        </div>

        {/* ✅ Carousel Showcase */}
        <div
          className="relative h-[520px] lg:h-[620px] flex justify-center items-end"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ✅ Left Arrow */}
          <button
            onClick={prevRobot}
            className="absolute left-2 md:left-10 bottom-44 z-20 
            bg-white/10 hover:bg-white/20 p-3 rounded-full"
          >
            ◀
          </button>

          {/* ✅ Apple Style Side Preview Robots */}
          <div className="relative flex justify-center items-end w-full">
            {/* ✅ LEFT Preview Robot */}
            <motion.img
              src={robots[(current - 1 + robots.length) % robots.length].img}
              alt="prev robot"
              className="
                absolute left-[5%] bottom-24
                h-[220px] lg:h-[320px]
                object-contain
                opacity-30 blur-sm scale-90
                hidden md:block
              "
            />

            {/* ✅ CENTER Main Robot Slide */}
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col items-center cursor-pointer"
              onClick={() => setShowInfo(!showInfo)}
            >
              {/* ✅ Glow Shadow */}
              <div className="absolute bottom-6 w-[200px] h-[30px] bg-cyan-400/20 blur-2xl rounded-full"></div>

              {/* ✅ Robot Image Hover Rise + Color */}
              <motion.img
                src={robots[current].img}
                alt="robot"
                animate={{
                  y: showInfo ? -25 : 0,
                }}
                whileHover={{
                  y: -35,
                }}
                transition={{ duration: 0.4 }}
                className="
                  object-contain
                  h-[340px] sm:h-[420px] lg:h-[560px]

                  md:grayscale md:group-hover:grayscale-0
                  transition duration-700
                "
              />

              {/* ✅ Info Text */}
              <div
                className={`
                  absolute bottom-16 text-center px-4 transition duration-500

                  ${
                    showInfo
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }

                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                `}
              >
                <h3 className="text-xl font-bold uppercase tracking-widest">
                  {robots[current].title}
                </h3>

                <p className="text-sm text-gray-300 mt-2 max-w-[260px]">
                  {robots[current].desc}
                </p>
              </div>
            </motion.div>

            {/* ✅ RIGHT Preview Robot */}
            <motion.img
              src={robots[(current + 1) % robots.length].img}
              alt="next robot"
              className="
                absolute right-[5%] bottom-24
                h-[220px] lg:h-[320px]
                object-contain
                opacity-30 blur-sm scale-90
                hidden md:block
              "
            />
          </div>

          {/* ✅ Right Arrow */}
          <button
            onClick={nextRobot}
            className="absolute right-2 md:right-10 bottom-44 z-20 
            bg-white/10 hover:bg-white/20 p-3 rounded-full"
          >
            ▶
          </button>
        </div>

        {/* ✅ 3D Floor */}
        <div className="relative mt-6 w-full h-[90px] overflow-hidden">
          {/* ✅ Glass Floor */}
          <div
            className="absolute bottom-0 left-0 w-full h-full 
            bg-gradient-to-t from-cyan-400/10 via-white/5 to-transparent"
            style={{
              transform: "perspective(800px) rotateX(75deg)",
              transformOrigin: "bottom",
            }}
          ></div>

          {/* ✅ Neon Grid */}
          <div
            className="absolute bottom-0 left-0 w-full h-full opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,255,255,0.25) 1px, transparent 1px), linear-gradient(to top, rgba(0,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
              transform: "perspective(800px) rotateX(75deg)",
              transformOrigin: "bottom",
            }}
          ></div>

          {/* ✅ Floor Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400/40 blur-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
