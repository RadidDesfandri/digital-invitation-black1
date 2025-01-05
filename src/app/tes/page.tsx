"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const WeddingInvitation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gray-200 overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={isOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/2 bg-pink-500"
      ></motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={isOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-1/2 bg-pink-500"
      ></motion.div>

      {/* Konten Undangan */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          className="absolute z-10 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Selamat Datang di Undangan Pernikahan Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600">Nama Pasangan</p>
        </motion.div>
      )}

      {/* Tombol */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
          className="z-10 rounded-lg bg-pink-500 px-6 py-3 text-lg font-semibold text-white shadow-lg"
        >
          Buka Undangan
        </motion.button>
      )}
    </div>
  );
};

export default WeddingInvitation;
