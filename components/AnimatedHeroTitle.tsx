import React, { useEffect, useRef } from "react";
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

// Extracted MagneticChar to prevent re-creation on render
const MagneticChar = ({ char }: { char: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for the letter movement
  const mX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseOver = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      // Calculate distance from center of the letter
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const disX = e.clientX - centerX;
      const disY = e.clientY - centerY;

      // Move letter slightly towards mouse (magnetic)
      x.set(disX * 0.3);
      y.set(disY * 0.3);
    }
  };

  return (
    <motion.span
      ref={ref}
      variants={letterVariants}
      className="inline-block origin-left hover:text-green-400 transition-colors duration-300 cursor-default"
      style={{ x: mX, y: mY }}
      onMouseMove={handleMouseOver}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.2, rotate: Math.random() * 10 - 5 }}
    >
      {char}
    </motion.span>
  );
};

const AnimatedHeroTitle: React.FC = () => {
  // Mouse position tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), {
    stiffness: 150,
    damping: 20,
    mass: 1,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    stiffness: 150,
    damping: 20,
    mass: 1,
  });

  // Smooth springs for spotlight movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Map to percentage strings for CSS
  const xPct = useTransform(springX, (x) => `${x * 100}%`);
  const yPct = useTransform(springY, (y) => `${y * 100}%`);

  const background = useMotionTemplate`radial-gradient(circle at ${xPct} ${yPct}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 40%)`;

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <div style={{ perspective: "1000px" }}>
      <motion.div
        className="font-display text-[13vw] leading-[0.8] font-black uppercase text-[#222] select-none flex flex-col relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Spotlight Overlay */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            background,
          }}
        />

        {/* Line 1: Digital */}
        <motion.div
          className="flex overflow-hidden mix-blend-screen"
          variants={wordVariants}
          style={{ transform: "translateZ(50px)" }} // Add depth
        >
          {line1.split("").map((char, i) => (
            <MagneticChar key={i} char={char} />
          ))}
        </motion.div>

        {/* Line 2: Sculptor */}
        <motion.div
          className="flex overflow-hidden text-white"
          variants={wordVariants}
          style={{ transform: "translateZ(80px)" }} // Add more depth to second line
        >
          {line2.split("").map((char, i) => (
            <MagneticChar key={i} char={char} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroTitle;
