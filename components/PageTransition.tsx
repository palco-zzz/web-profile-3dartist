import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  isFirstMount?: boolean;
  onMount?: () => void;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isFirstMount = false,
  onMount,
}) => {
  const shouldSkipIntro = useRef(isFirstMount);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstMount && onMount) {
      onMount();
    }
  }, []);

  const panelTransition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1], // Custom bezier for heavy feel
  };

  return (
    <>
      <motion.div
        className="w-full"
        // If first mount, we might want a simpler fade or no scale effect to match loading screen
        // But keeping it consistent is fine.
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        {children}
      </motion.div>

      {/* 
        BARN DOORS OVERLAY (Seamless Combination)
        These are the EXIT doors (Slide IN to close)
      */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex w-screen h-screen top-0 left-0">
        {/* Left Panel */}
        <motion.div
          className="h-full w-1/2 bg-[#050505] relative border-r border-[#222] flex items-center justify-end overflow-hidden"
          initial={{ x: "-100%" }}
          animate={{
            x: "-100%",
            transition: { ...panelTransition, delay: 0.2 },
          }}
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
      </div>

      {/* 
         THE INTRO DOORS (For the New Page)
         Only show these if it is NOT the first mount.
      */}
      {!shouldSkipIntro.current && (
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
      )}
    </>
  );
};

export default PageTransition;
