import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ContactForm from "../components/ContactForm";
import { useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import TechnologySection from "../pages/TechnologySection";

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

  /* ✅ FIX: Scroll Hook Added */
  const { scrollY } = useScroll();

  /* ✅ Parallax Effect */
  const heroParallax = useTransform(scrollY, [0, 600], [0, 200]);

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
                AI Labs
              </a>

              <Link
                to="/internship"
                className="hover:text-gray-300 transition"
              >
                Internships
              </Link>

              <a href="#contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ Mobile Glass Menu Popup */}
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
              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Missions
              </a>

              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Robots
              </a>

              <a
                href="#"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                AI Labs
              </a>

              <Link
                to="/internship"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Internships
              </Link>

              <a
                href="#contact"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

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
            particles: {
              number: { value: 60 },
              opacity: { value: 0.15 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 0.4 },
              links: {
                enable: true,
                distance: 150,
                opacity: 0.08,
              },
            },
          }}
        />

        {/* ✅ Parallax Video */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          style={{ y: heroParallax }}
          className="absolute top-0 left-0 w-full h-full object-cover scale-110"
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Glow */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>

        {/* Hero Content */}
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
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            HUMANXAI <br /> ROBOTICS
          </motion.h2>

          <motion.p className="mt-6 text-lg text-gray-200">
            Building autonomous humanoid systems powered by AI.
          </motion.p>
        </div>
      </section>

      {/* ✅ TECHNOLOGY SECTION */}
      <TechnologySection />

      {/* ✅ STATS SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest">
          HumanXai Impact
        </h2>
      </section>

      {/* ✅ CONTACT */}
      <ContactForm />

      {/* ✅ FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} HumanXai Robotics — Beyond SpaceX.
      </footer>
    </div>
  );
};

export default Home;
