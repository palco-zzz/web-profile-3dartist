import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const letterVariants = {
  hidden: {
    y: "110%",
    rotate: 10,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

interface MagneticCharProps {
  char: string;
  isMobile: boolean;
}

// Extracted MagneticChar to prevent re-creation on render
const MagneticChar: React.FC<MagneticCharProps> = ({ char, isMobile }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for the letter movement
  const mX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseOver = (e: React.MouseEvent) => {
    if (isMobile) return; // Disable magnetic effect on mobile

    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const disX = e.clientX - centerX;
      const disY = e.clientY - centerY;

      x.set(disX * 0.3);
      y.set(disY * 0.3);
    }
  };

  return (
    <motion.span
      ref={ref}
      variants={letterVariants}
      className="inline-block origin-left hover:text-green-400 transition-colors duration-300 cursor-default"
      style={{ x: isMobile ? 0 : mX, y: isMobile ? 0 : mY }}
      onMouseMove={handleMouseOver}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={
        isMobile ? {} : { scale: 1.2, rotate: Math.random() * 10 - 5 }
      }
    >
      {char}
    </motion.span>
  );
};

const AnimatedHeroTitle: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse position tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for rotation (reduced on mobile)
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], isMobile ? [0, 0] : [15, -15]),
    {
      stiffness: 150,
      damping: 20,
      mass: 1,
    }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], isMobile ? [0, 0] : [-15, 15]),
    {
      stiffness: 150,
      damping: 20,
      mass: 1,
    }
  );

  // Smooth springs for spotlight movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Map to percentage strings for CSS
  const xPct = useTransform(springX, (x) => `${x * 100}%`);
  const yPct = useTransform(springY, (y) => `${y * 100}%`);

  const background = useMotionTemplate`radial-gradient(circle at ${xPct} ${yPct}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%)`;

  const handleMouseMove = (e: MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const line1 = "Digital";
  const line2 = "Sculptor";

  return (
    <div style={{ perspective: isMobile ? "none" : "1000px" }}>
      <motion.div
        className="font-display text-[11vw] sm:text-[13vw] md:text-[13vw] leading-[0.9] md:leading-[0.8] font-black uppercase text-[#222] select-none flex flex-col relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: isMobile ? "flat" : "preserve-3d",
        }}
      >
        {/* Spotlight Overlay - Hidden on mobile */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              background,
            }}
          />
        )}

        {/* Line 1: Digital */}
        <motion.div
          className="flex overflow-hidden mix-blend-screen"
          variants={wordVariants}
          style={{ transform: isMobile ? "none" : "translateZ(50px)" }}
        >
          {line1.split("").map((char, i) => (
            <MagneticChar key={i} char={char} isMobile={isMobile} />
          ))}
        </motion.div>

        {/* Line 2: Sculptor */}
        <motion.div
          className="flex overflow-hidden text-white"
          variants={wordVariants}
          style={{ transform: isMobile ? "none" : "translateZ(80px)" }}
        >
          {line2.split("").map((char, i) => (
            <MagneticChar key={i} char={char} isMobile={isMobile} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroTitle;
