import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Internship = () => {
  const [type, setType] = useState("offline");

  const handleOfflineSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Internship form submitted! Team will contact you soon.");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-20">

      {/* ✅ Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-widest mb-10 text-center"
      >
        HUMANXAI INTERNSHIPS
      </motion.h1>

      {/* ✅ Toggle Buttons */}
      <div className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 mb-12">

        <button
          onClick={() => setType("offline")}
          className={`px-6 py-2 rounded-full transition ${
            type === "offline"
              ? "bg-white text-black font-bold"
              : "text-gray-300"
          }`}
        >
          Offline Internship
        </button>

        <button
          onClick={() => setType("online")}
          className={`px-6 py-2 rounded-full transition ${
            type === "online"
              ? "bg-white text-black font-bold"
              : "text-gray-300"
          }`}
        >
          Online Internship
        </button>
      </div>

      {/* ✅ OFFLINE FORM */}
      {type === "offline" && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-xl 
          border border-white/20 rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-center">
            Offline Internship Form
          </h2>

          <form onSubmit={handleOfflineSubmit} className="space-y-5">

            {/* Name */}
            <input
              required
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
            />

            {/* Email */}
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
            />

            {/* Mobile */}
            <input
              required
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
            />

            {/* Gender */}
            <select
              required
              className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            {/* Address */}
            <input
              required
              placeholder="Full Address"
              className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
            />

            {/* Domain */}
            <select
              required
              className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 outline-none focus:border-white"
            >
              <option value="">Domain of Internship</option>
              <option>AI Research</option>
              <option>Web Development</option>
              <option>Robotics Engineering</option>
              <option>Data Science</option>
            </select>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-6 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition"
            >
              Apply Now
            </button>
          </form>
        </motion.div>
      )}

      {/* ✅ ONLINE OPTION */}
      {type === "online" && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl bg-white/10 backdrop-blur-xl 
          border border-white/20 rounded-3xl shadow-xl p-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest">
            Online Internship Program
          </h2>

          <p className="text-gray-300 mb-8">
            Join our online internship powered by Startup101 platform.
          </p>

          <a
            href="https://startup101-drab.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition"
          >
            Go to Online Internship Portal
          </a>
        </motion.div>
      )}

      {/* ✅ Back Button */}
      <a
        href="/"
        className="mt-16 text-gray-400 hover:text-white transition underline"
      >
        ← Back to Home
      </a>
    </div>
  );
};

export default Internship;
