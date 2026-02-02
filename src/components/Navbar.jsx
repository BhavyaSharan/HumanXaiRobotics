import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  /* ✅ Navbar show/hide on scroll */
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;

      /* ✅ Sticky navbar after 25% scroll */
      if (scrollPosition > pageHeight * 0.25) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }

      /* ✅ Hide navbar while scrolling down */
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
    <nav
      className={`z-50 w-[92%] md:w-[80%] transition-all duration-500
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
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 md:px-10 py-4 shadow-lg">

        {/* ✅ Logo */}
        <Link
          to="/"
          className="text-lg md:text-xl font-bold tracking-widest"
        >
          HUMANXAI
        </Link>

        {/* ✅ Desktop Links (Even Spacing) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div
            className="
              flex items-center justify-evenly
              w-full max-w-2xl
              uppercase text-sm tracking-wide
            "
          >
            {/* ✅ Home Link Added */}
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>

            <Link to="/missions" className="hover:text-gray-300 transition">
              Missions
            </Link>

            <Link to="/robots" className="hover:text-gray-300 transition">
              Robots
            </Link>

            <Link to="/ai-labs" className="hover:text-gray-300 transition">
              AI Labs
            </Link>

            <Link to="/internship" className="hover:text-gray-300 transition">
              Internships
            </Link>

            <Link to="/#contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* ✅ Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Glass Popup Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="
              absolute top-20 right-6 w-64
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-2xl shadow-2xl p-6
              flex flex-col gap-4
              uppercase text-sm z-50
            "
          >
            {/* ✅ Home Link Added */}
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/missions"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Missions
            </Link>

            <Link
              to="/robots"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Robots
            </Link>

            <Link
              to="/ai-labs"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              AI Labs
            </Link>

            <Link
              to="/internship"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Internships
            </Link>

            <Link
              to="/#contact"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="
                mt-3 py-2 rounded-xl border border-white/30
                hover:bg-white hover:text-black transition
              "
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
