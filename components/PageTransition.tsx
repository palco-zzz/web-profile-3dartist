import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const panelTransition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1], // Custom bezier for heavy feel
  };

  return (
    <>
      <motion.div
        className="w-full"
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px) brightness(0.5)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px) brightness(1)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px) brightness(0.5)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        {children}
      </motion.div>

      {/* 
        BARN DOORS OVERLAY (Seamless Combination)
        We use a specific z-index layout. 
        On Exit: Doors Slide IN (Close)
        On Enter: Doors Slide OUT (Open)
      */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex w-screen h-screen top-0 left-0">
        {/* Left Panel */}
        <motion.div
          className="h-full w-1/2 bg-[#050505] relative border-r border-[#222] flex items-center justify-end overflow-hidden"
          initial={{ x: "-100%" }}
          animate={{
            x: "-100%",
            transition: { ...panelTransition, delay: 0.2 },
          }} // Enter: Starts closed (0) -> Opens (-100%)? No, see below logic
          exit={{ x: "0%", transition: panelTransition }}
        >
          {/* Decorative Marquee on Left Door */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 -rotate-90 origin-right whitespace-nowrap opacity-20 font-mono text-xs tracking-widest text-white">
            LOADING ARTIFACT // LOADING ARTIFACT // LOADING ARTIFACT
          </div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="h-full w-1/2 bg-[#050505] relative border-l border-[#222] flex items-center justify-start overflow-hidden"
          initial={{ x: "100%" }}
          animate={{
            x: "100%",
            transition: { ...panelTransition, delay: 0.2 },
          }}
          exit={{ x: "0%", transition: panelTransition }}
        >
          {/* Decorative Marquee on Right Door */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-90 origin-left whitespace-nowrap opacity-20 font-mono text-xs tracking-widest text-white">
            PLEASE WAIT // SYSTEM INITIALIZING // PLEASE WAIT
          </div>
        </motion.div>

        {/* 
            Since AnimatePresence mode="wait" unmounts the old one, we need the NEW page
            to start with doors CLOSED and then OPEN them. 
            So we need a separate "Intro" set of doors? 
            Or we reverse the logic?
            
            Standard Pattern for "Wait" Mode:
            1. Old Page: Doors Open -> Doors Close (Exit Animation)
            2. New Page: Doors Closed (Initial) -> Doors Open (Enter Animation)
         */}
      </div>

      {/* 
         THE INTRO DOORS (For the New Page)
         These exist ONLY when the component mounts to simulate the "opening".
      */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex w-screen h-screen top-0 left-0">
        <motion.div
          className="h-full w-1/2 bg-[#050505] relative border-r border-[#222] flex items-center justify-end overflow-hidden"
          initial={{ x: "0%" }} // Start Closed
          animate={{ x: "-100%", transition: { ...panelTransition } }} // Slide Left
        >
          <div className="absolute right-0 top-0 h-full w-[1px] bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </motion.div>
        <motion.div
          className="h-full w-1/2 bg-[#050505] relative border-l border-[#222] flex items-center justify-start overflow-hidden"
          initial={{ x: "0%" }} // Start Closed
          animate={{ x: "100%", transition: { ...panelTransition } }} // Slide Right
        >
          <div className="absolute left-0 top-0 h-full w-[1px] bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </motion.div>
      </div>
    </>
  );
};

export default PageTransition;
