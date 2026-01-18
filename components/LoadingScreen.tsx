import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE SYSTEMS");

  const statusMessages = [
    "LOADING ASSETS...",
    "CALIBRATING VIEWPORT...",
    "BAKING LIGHTMAPS...",
    "COMPILING SHADERS...",
    "RENDERING GEOMETRY...",
    "SYSTEM READY.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Slight delay before clearing
          return 100;
        }
        // Random increment for organic feel
        const increment = Math.random() * 2.5;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Update status text based on progress thresholds
  useEffect(() => {
    const index = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatusText(statusMessages[index]);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-between p-8 md:p-12 cursor-wait"
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start font-mono text-xs text-gray-400 uppercase tracking-widest">
        <div className="flex flex-col gap-1">
          <span className="text-white">Novendry Anggara Putra</span>
          <span>Portfolio 2026</span>
        </div>
        <div className="hidden md:block">
          <span>Id: 882-991-X</span>
        </div>
      </div>

      {/* Center Percentage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <div className="relative inline-block">
          <span className="font-display text-[20vw] font-black leading-none text-white tracking-tighter">
            {Math.floor(progress)}
          </span>
          <span className="absolute top-4 -right-12 text-xl md:text-4xl font-mono text-[#38b6ff]">
            %
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end font-mono text-xs uppercase tracking-widest relative z-10 text-gray-400">
        <div className="flex flex-col gap-2 w-64">
          {/* Simple tech progress bar */}
          <div className="w-full h-[2px] bg-gray-800 overflow-hidden">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-white">{statusText}</span>
          </div>
        </div>

        <div className="animate-pulse text-right">
          <span>Standby</span>
        </div>
      </div>

      {/* Background Grid Decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
