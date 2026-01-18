import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AllProjects: React.FC = () => {
  const [filter, setFilter] = useState("ALL");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Filter Logic
  const categories = [
    "ALL",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];
  const filteredProjects =
    filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  // Deterministic pattern for grid sizes to create "Bento" look
  // We use index inside the filtered array to ensure layout stays dense
  const getSizeClasses = (index: number) => {
    // A repeating pattern of 6 items
    const pattern = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1 md:row-span-1", // Standard
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-1 md:row-span-1", // Standard
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Standard
    ];
    return pattern[index % pattern.length];
  };

  return (
    <div className="bg-[#050505] min-h-screen w-full text-white">
      {/* Navigation & Header */}
      <div className="pt-8 px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 group clickable mb-6 opacity-60 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span className="font-mono text-xs uppercase tracking-widest">
              Return Home
            </span>
          </Link>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-8xl w-full uppercase leading-[0.9]">
            Selected
            <br />
            <span className="text-gray-500">Archives</span>
          </h1>
        </div>

        {/* Filter Tabs - Mobile: Floating Bottom Dock, Desktop: Sticky Top Bar */}
        <div
          className={`
                z-40 transition-all duration-300
                /* Mobile: Fixed Bottom Capsule */
                fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px]
                bg-[#111]/80 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] p-1.5
                /* Desktop: Reset to Standard Sticky Header */
                md:sticky md:top-0 md:left-auto md:translate-x-0 md:w-full md:max-w-none
                md:bg-[#050505]/95 md:border-b md:border-t-0 md:border-x-0 md:border-white/10 md:rounded-none md:shadow-none md:p-4 md:mb-12
            `}
        >
          <div className="flex gap-1 md:gap-4 overflow-x-auto no-scrollbar items-center justify-between md:justify-end px-1 h-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                       relative font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full transition-colors clickable shrink-0
                       ${
                         filter === cat
                           ? "text-black"
                           : "text-gray-400 hover:text-white"
                       }
                     `}
              >
                {/* Active Sliding Background */}
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Text Label (Relative z-10 to sit above background) */}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BENTO GRID GALLERY */}
      <div className="px-4 md:px-12 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`relative group overflow-hidden rounded-lg bg-[#111] clickable ${getSizeClasses(
                  index
                )}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="block w-full h-full relative cursor-none"
                >
                  {/* 1. Base Beauty Image */}
                  <img
                    src={project.images.hero}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* 2. Wireframe Reveal Layer (The "X-Ray" Effect) */}
                  {/* We render the wireframe exactly on top, but hide it with a mask initially */}
                  {project.images.wireframe && (
                    <motion.div
                      className="absolute inset-0 z-10 bg-black"
                      initial={{ clipPath: "inset(0 100% 0 0)" }} // Starts hidden (clipped from right)
                      animate={{
                        clipPath:
                          hoveredId === project.id
                            ? "inset(0 0% 0 0)"
                            : "inset(0 100% 0 0)",
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={project.images.wireframe}
                        alt="Wireframe"
                        className="w-full h-full object-cover opacity-80 mix-blend-screen scale-105" // Matched scale hack or static
                        // Note: To match the beauty scale animation perfectly is hard without syncing.
                        // Simpler: Keep wireframe static or simple scale.
                        // Let's make wireframe static to show "Structure" vs "Movement".
                        // Or better: Apply same scale class? No, css group-hover works on child.
                        // Let's rely on standard img tag inside motion div
                      />
                      {/* Scanline decoration line */}
                      <div className="absolute top-0 right-0 w-[2px] h-full bg-[#38b6ff] shadow-[0_0_10px_#38b6ff] z-20"></div>
                    </motion.div>
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 z-30 p-6 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <motion.div
                        animate={{ rotate: hoveredId === project.id ? 45 : 0 }}
                        className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20"
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>

                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="font-mono text-[9px] text-[#38b6ff] uppercase tracking-widest mb-2 flex items-center gap-2">
                        {hoveredId === project.id && (
                          <span className="w-1 h-1 bg-[#38b6ff] rounded-full animate-ping" />
                        )}
                        {hoveredId === project.id
                          ? "SYSTEM_READY"
                          : project.category}
                      </div>
                      <h3 className="font-display font-bold text-2xl uppercase leading-none text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center border text-gray-600 font-mono">
            No archives found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
