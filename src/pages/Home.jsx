import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion ,AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

/* ✅ Tech Font */
import "@fontsource/orbitron";

/* ✅ Import Background Video */
import heroVideo from "../assets/Hero.mp4";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  /* ✅ Navbar show/hide on scroll */
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const particlesInit = async (main) => {
  await loadFull(main);
};


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollPosition > pageHeight * 0.25) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }

      if (scrollPosition > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-[Orbitron]">

      {/* ✅ NAVBAR */}
      <nav
        className={`z-50 w-[90%] md:w-[70%] transition-all duration-500
        ${
          stickyNav
            ? "fixed top-0 left-1/2 -translate-x-1/2"
            : "absolute top-6 left-1/2 -translate-x-1/2"
        }
        ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-lg">
          <h1 className="text-lg md:text-xl font-bold tracking-widest">
            HUMANXAI
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex justify-between w-[70%] uppercase text-sm tracking-wide">
              <a href="#" className="hover:text-gray-300 transition">
                Missions
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                Robots
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                AI labs
              </a>
     <Link to="/internship" className="hover:text-gray-300 transition">
  Internships
</Link>

              
              <a
                  href="#contact"
                  className="hover:text-gray-300 transition"
                                >
                         Contact
                      </a>

            </div>
          </div>

          {/* ✅ Mobile Fullscreen Menu */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ FULLSCREEN MOBILE OVERLAY */}
        {/* ✅ FULLSCREEN MOBILE OVERLAY */}
{/* ✅ FULLSCREEN MOBILE OVERLAY MENU */}
{/* ✅ GLASS HAMBURGER MENU POPUP */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="absolute top-20 right-6 w-64
      bg-white/10 backdrop-blur-xl border border-white/20
      rounded-2xl shadow-2xl p-6 flex flex-col gap-4
      uppercase text-sm z-50"
    >
      {/* ✅ All Links Visible */}
      <a
        href="#"
        className="hover:text-gray-300 transition"
        onClick={() => setMenuOpen(false)}
      >
        Missions
      </a>

      <a
        href="#"
        className="hover:text-gray-300 transition"
        onClick={() => setMenuOpen(false)}
      >
        Robots
      </a>

      <a
        href="#"
        className="hover:text-gray-300 transition"
        onClick={() => setMenuOpen(false)}
      >
        AI Labs
      </a>

       <Link to="/internship"
        className="hover:text-gray-300 transition"
        onClick={() => setMenuOpen(false)}
        >
  Internships
</Link>

      <a
        href="#contact"
        className="hover:text-gray-300 transition"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

      {/* ✅ Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="mt-3 py-2 rounded-xl border border-white/30
        hover:bg-white hover:text-black transition"
      >
        Close
      </button>
    </motion.div>
  )}
</AnimatePresence>



      </nav>



      {/* ✅ HERO SECTION */}
      <section className="relative h-screen flex justify-center items-center text-center overflow-hidden">

        {/* ✅ AI Particle Background */}
<Particles
  init={particlesInit}
  className="absolute inset-0 z-0"
  options={{
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.15,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.08,
        width: 1,
      },
    },
    detectRetina: true,
  }}
/>

        {/* ✅ Cinematic Slow Zoom Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-110 animate-[zoom_15s_linear_infinite]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* ✅ Neon Glow Behind Title */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>

        {/* ✅ Hero Content */}
        <div className="relative z-10 max-w-3xl px-6">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase text-gray-300 tracking-[0.3em] mb-4"
          >
            Next Generation AI and Robotics
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            HUMANXAI <br /> ROBOTICS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-gray-200"
          >
            Building autonomous humanoid systems powered by AI, designed to transform industries.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            className="mt-10 px-10 py-3 border rounded-xl uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Explore Missions
          </motion.button>
        </div>

        {/* ✅ Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 text-white text-3xl z-20"
        >
          ↓
        </motion.div>
      </section>

      {/* ✅ STATS SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest">
          HumanXai Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-10 px-10">
          {[
            { num: "120+", label: "Robots Deployed" },
            { num: "50B+", label: "AI Parameters Trained" },
            { num: "15+", label: "Industries Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-gray-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition"
            >
              <h3 className="text-5xl font-bold">{stat.num}</h3>
              <p className="text-gray-400 mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ TIMELINE MISSIONS (Better than Cards) */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-center">
          Mission Timeline
        </h2>

        <div className="space-y-12 max-w-3xl mx-auto">
          {[
            { year: "2026", title: "Humanoid Care Robots" },
            { year: "2027", title: "Industrial Automation Expansion" },
            { year: "2028", title: "AI Copilot for All Robots" },
          ].map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 border-l-4 border-white/40 bg-white/5 rounded-xl"
            >
              <p className="text-gray-400">{m.year}</p>
              <h3 className="text-2xl font-bold mt-2">{m.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactForm />

      {/* ✅ FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} HumanXai Robotics — Beyond SpaceX.
      </footer>

      {/* ✅ Zoom Animation CSS */}
      <style>
        {`
        @keyframes zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        `}
      </style>
    </div>
  );
};

export default Home;
