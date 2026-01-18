import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const transition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1],
  };

  const columns = 5;

  return (
    <div className="relative">
      {/* The Page Content - slight fade/scale for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        {children}
      </motion.div>

      {/* 
        The Curtain Overlay (Exit Animation)
        When leaving a page, these columns slide IN from the BOTTOM to cover the screen.
      */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-row h-screen w-screen top-0 left-0">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full bg-[#1a1a1a] relative border-r border-[#222]"
            style={{ width: `${100 / columns}%` }}
            initial={{ y: "100%" }}
            exit={{
              y: "0%",
              transition: {
                ...transition,
                delay: i * 0.05, // Stagger effect
              },
            }}
          />
        ))}
      </div>

      {/* 
        The Curtain Overlay (Enter Animation)
        When entering a new page, these columns start covering the screen (y:0)
        and slide UP (y:-100%) to reveal the content.
      */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-row h-screen w-screen top-0 left-0">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full bg-[#1a1a1a] relative border-r border-[#222]"
            style={{ width: `${100 / columns}%` }}
            initial={{ y: "0%" }}
            animate={{
              y: "-100%",
              transition: {
                ...transition,
                delay: i * 0.05, // Stagger reveal
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageTransition;
