import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("✅ Our team will contact you soon!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center px-6 py-20 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-xl 
        border border-white/20 rounded-3xl shadow-2xl p-10"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-8">
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-black/40 
              border border-gray-600 text-white outline-none 
              focus:border-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-black/40 
              border border-gray-600 text-white outline-none 
              focus:border-white transition"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-3 rounded-xl bg-black/40 
              border border-gray-600 text-white outline-none 
              focus:border-white transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black 
            font-bold uppercase tracking-widest hover:bg-gray-200 transition"
          >
            Get Quote
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
