import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ContactForm from "../components/ContactForm";
import { useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import TechnologySection from "../pages/TechnologySection";
import UseCasesSection from "../pages/UseCasesSection"
import Impact from "../pages/Impact"
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";



/* ✅ Tech Font */
import "@fontsource/orbitron";

/* ✅ Import Background Video */
import heroVideo from "../assets/Hero.mp4";

const Home = () => {
  const location = useLocation();

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

  useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // ✅ Remove hash from URL after scrolling
      setTimeout(() => {
        window.history.replaceState(null, "", "/");
      }, 500);
    }
  }
}, [location]);


  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-[Orbitron]">
     <Navbar />
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

      {/* UseCase Section*/}
      <UseCasesSection />

      {/* ✅ STATS SECTION */}
      <Impact/>

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
