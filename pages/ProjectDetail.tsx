import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { ArrowLeft, ArrowDown, Box, Layers, Maximize2 } from "lucide-react";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const heroRef = useRef<HTMLImageElement>(null);

  if (!project) return null;

  return (
    <div className="bg-background min-h-screen text-white pb-24">
      {/* Navigation Overlay */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <Link
          to="/"
          className="flex items-center gap-2 pointer-events-auto group clickable"
        >
          <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="font-mono text-sm hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
            BACK TO INDEX
          </span>
        </Link>
        <span className="font-mono text-xs">{project.id.toUpperCase()}</span>
      </div>

      {/* Hero Header */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          ref={heroRef}
          src={project.images.hero}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/30 pt-8">
              <motion.h1
                layoutId={`project-title-${project.id}`}
                className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.9]"
              >
                {project.title}
              </motion.h1>
              <div className="flex flex-col gap-4 font-mono text-xs md:text-sm text-gray-300">
                <div className="flex gap-12">
                  <div>
                    <span className="block text-gray-500 mb-1">CATEGORY</span>
                    {project.category}
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">POLYCOUNT</span>
                    {project.polycount.toLocaleString()} Tris
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          {/* Sticky Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Overview
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4">
                  Software Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-colors cursor-default"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {project.sketchfabId && (
                <div className="aspect-video w-full bg-black border border-white/10 relative overflow-hidden group clickable">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Box size={32} className="animate-float" />
                  </div>
                  <div className="absolute bottom-4 w-full text-center font-mono text-xs text-gray-400">
                    INTERACTIVE VIEWER AVAILABLE
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content Feed */}
          <div className="lg:col-span-8 space-y-24">
            {/* Beauty Renders - Full Width */}
            <div className="space-y-4">
              {project.images.beauty.map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden">
                  <img
                    src={img}
                    alt={`Render ${idx}`}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    RENDER_0{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Wireframe Break - Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#111] p-8 flex flex-col justify-between min-h-[400px]">
                <div className="font-display text-3xl font-bold text-gray-700">
                  Topology
                  <br />
                  Breakdown
                </div>
                <div className="font-mono text-xs text-gray-500">
                  Optimized edge flow for animation deformation and game engine
                  performance.
                </div>
              </div>
              <div className="aspect-square bg-black relative group overflow-hidden">
                <img
                  src={project.images.wireframe}
                  alt="Wireframe"
                  className="w-full h-full object-cover invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="font-mono text-xs text-green-400">
                    WIREFRAME_VIEW
                  </span>
                </div>
              </div>
            </div>

            {/* Texture Maps - Horizontal Scroll or Grid */}
            <div>
              <h3 className="font-display text-3xl mb-8">Texture Sets</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.images.textures.map((tex) => (
                  <div key={tex.name} className="space-y-2">
                    <div className="aspect-square bg-[#1a1a1a] overflow-hidden group">
                      <img
                        src={tex.url}
                        alt={tex.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <p className="font-mono text-[10px] uppercase text-center text-gray-500">
                      {tex.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Teaser */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-32 border-t border-white/20 pt-12 text-center">
        <p className="font-mono text-xs text-gray-500 mb-4">
          THANK YOU FOR WATCHING
        </p>
        <Link
          to={`/project/${
            PROJECTS[
              (PROJECTS.findIndex((p) => p.id === id) + 1) % PROJECTS.length
            ].id
          }`}
          className="inline-block font-display text-4xl md:text-6xl font-black uppercase hover:text-gray-400 transition-colors clickable"
        >
          Next Project{" "}
          <ArrowDown className="inline ml-4 rotate-[-90deg]" size={48} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
