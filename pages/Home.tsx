import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, SKILLS, ARTIST_INFO, CATEGORIES } from "../constants";
import {
  ArrowDownRight,
  MapPin,
  Download,
  ArrowRight,
  Asterisk,
  Box,
  ExternalLink,
} from "lucide-react";
import AnimatedHeroTitle from "../components/AnimatedHeroTitle";
import LoadingScreen from "../components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // State for the floating hover effect
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse tracking variables
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const softwareSkills = SKILLS.filter((s) => s.category === "software");
  const specialtySkills = SKILLS.filter((s) => s.category !== "software");

  // Filter Projects
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Loading State
  const [isLoading, setIsLoading] = useState(true);

  // Smooth Mouse Animation Loop
  useEffect(() => {
    if (isLoading) return; // Don't animate cursor during loading

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Linear interpolation (Lerp) for smooth following delay (0.1 = speed)
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * 0.1;

      setCursorPos({ x: currentPos.current.x, y: currentPos.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isLoading]);

  // Get active project data for the modal
  const activeProjectData = PROJECTS.find((p) => p.id === hoveredProject);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} key="loading" />
        )}
      </AnimatePresence>

      <div className="relative w-full bg-[#0a0a0a] min-h-screen">
        {/* 
        --- FLOATING LENS (Desktop Only) --- 
        This element follows the cursor and shows the active project image.
        Z-Index logic: It sits below the text (z-10) but above the background (z-0).
      */}
        <div
          className="fixed top-0 left-0 pointer-events-none z-10 hidden md:block overflow-hidden rounded-lg shadow-2xl transition-opacity duration-300"
          style={{
            width: "400px",
            height: "280px",
            transform: `translate(${cursorPos.x - 200}px, ${
              cursorPos.y - 140
            }px) rotate(${hoveredProject ? "-5deg" : "0deg"}) scale(${
              hoveredProject ? 1 : 0.5
            })`,
            opacity: hoveredProject ? 1 : 0,
          }}
        >
          {activeProjectData && (
            <div className="relative w-full h-full bg-gray-900">
              <img
                src={activeProjectData.images.hero}
                alt="Preview"
                className="w-full h-full object-cover animate-pulse" // Simple pulse to show it's "live"
                style={{ animationDuration: "3s" }}
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

              {/* Info Badge inside floating card */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-3 py-2 bg-black/60 backdrop-blur-md rounded border border-white/10">
                <span className="text-[10px] font-mono text-white uppercase tracking-widest truncate max-w-[200px]">
                  {activeProjectData.title}
                </span>
                <span className="text-[10px] font-mono text-green-400">
                  {activeProjectData.polycount > 1000
                    ? `${(activeProjectData.polycount / 1000).toFixed(1)}k`
                    : activeProjectData.polycount}{" "}
                  Tris
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-20 px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
          {/* Header / Nav */}
          <header className="flex justify-between items-start mb-24 md:mb-32">
            <div>
              <h1 className="font-display font-bold text-xl md:text-2xl leading-none uppercase tracking-tight text-white">
                Novendry
                <br />
                Anggara
                <br />
                Putra
              </h1>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                OPEN FOR COMMISSIONS
              </div>
            </div>

            <div className="text-right hidden md:block text-white">
              <p className="font-mono text-xs text-gray-500 mb-1">
                BASE OF OPERATIONS
              </p>
              <p className="font-display font-bold text-lg uppercase">
                {ARTIST_INFO.location}
              </p>
            </div>
          </header>

          {/* Hero Text */}
          <section className="mb-32 relative">
            <AnimatedHeroTitle />

            <div
              className="mt-12 flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-white/10 pt-8 animate-reveal-up"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="max-w-md text-gray-400 text-lg font-light leading-relaxed">
                {ARTIST_INFO.bio}
              </p>
              <div className="flex gap-6 text-white">
                <a
                  href={ARTIST_INFO.socials.artstation}
                  target="_blank"
                  className="font-mono text-xs uppercase border-b border-transparent hover:border-white transition-colors clickable hover:text-green-400"
                >
                  ArtStation
                </a>
                <a
                  href={ARTIST_INFO.socials.linkedin}
                  target="_blank"
                  className="font-mono text-xs uppercase border-b border-transparent hover:border-white transition-colors clickable hover:text-blue-400"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  className="font-mono text-xs uppercase border-b border-transparent hover:border-white transition-colors flex items-center gap-1 clickable"
                >
                  Resume <Download size={12} />
                </a>
              </div>
            </div>
          </section>

          {/* --- UNIQUE PROJECT SHOWCASE --- */}
          <section className="mb-40" id="work" ref={containerRef}>
            <div className="mb-16">
              <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-8">
                <span className="font-mono text-xs text-gray-500">
                  (01) INDEX
                </span>
                <span className="font-mono text-xs text-gray-500 uppercase">
                  Selected Works
                </span>
              </div>

              {/* Category Filter */}
              <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar mask-gradient-x">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                      text-xs md:text-sm font-medium whitespace-nowrap pb-2 border-b-2 transition-all duration-300 clickable font-mono uppercase tracking-widest
                      ${
                        activeCategory === cat
                          ? "border-[#38b6ff] text-white"
                          : "border-transparent text-gray-600 hover:text-white"
                      }
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <Link
                    to={`/project/${project.id}`}
                    key={project.id}
                    className="group relative border-b border-white/10 clickable w-full"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="py-8 md:py-16 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 group-hover:px-4">
                      {/* Title & Index */}
                      <div className="relative z-20 mix-blend-difference text-white flex items-baseline gap-6 md:gap-12 pointer-events-none">
                        <span className="font-mono text-xs md:text-sm text-gray-500">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-4xl md:text-8xl font-black uppercase leading-none transition-transform duration-500 origin-left group-hover:scale-105 group-hover:skew-x-6">
                          {project.title}
                        </h3>
                      </div>

                      {/* Meta Data (Visible on Desktop Right) */}
                      <div className="relative z-20 mix-blend-difference hidden md:flex flex-col items-end gap-2 text-white pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="font-mono text-xs uppercase tracking-widest">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <Box size={12} />{" "}
                          {project.software.slice(0, 2).join(" + ")}
                        </div>
                      </div>

                      {/* Mobile Only Image (Fallback since no hover) */}
                      <div className="md:hidden mt-6 aspect-video w-full overflow-hidden rounded bg-gray-900 border border-white/10">
                        <img
                          src={project.images.hero}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="md:hidden mt-4 flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-500 uppercase">
                          {project.category}
                        </span>
                        <ArrowRight className="text-white" size={20} />
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-32 text-center border-b border-white/10">
                  <p className="font-mono text-gray-600">
                    NO ARTIFACTS FOUND IN THIS SECTOR
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Technical Arsenal */}
          <section className="mb-24 border-t border-white/20 pt-24" id="skills">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-gray-500 block mb-6">
                  (02) CAPABILITIES
                </span>
                <h3 className="font-display text-5xl font-bold uppercase mb-8 leading-none text-white">
                  Technical
                  <br />
                  Arsenal
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  A comprehensive suite of industry-standard tools and
                  methodologies. From high-poly sculpting to engine-ready
                  optimization.
                </p>
              </div>

              <div className="lg:col-span-8 overflow-hidden relative">
                {/* Infinite Software Marquee */}
                <div className="w-full relative py-8 border-y border-white/10 mb-12 mask-gradient-x">
                  <div className="flex whitespace-nowrap animate-scroll hover:animation-play-state-paused">
                    {[
                      ...softwareSkills,
                      ...softwareSkills,
                      ...softwareSkills,
                    ].map((skill, i) => (
                      <div
                        key={`${skill.name}-${i}`}
                        className="inline-flex items-center gap-4 mx-8 group clickable"
                      >
                        <span className="text-gray-600 group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(
                            skill.icon as React.ReactElement<any>,
                            { size: 36 }
                          )}
                        </span>
                        <span className="font-display text-4xl font-bold text-transparent text-outline group-hover:text-white transition-colors duration-300 uppercase">
                          {skill.name}
                        </span>
                        <Asterisk size={12} className="text-gray-600" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bento Grid for Specialties */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
                  {specialtySkills.map((skill, i) => (
                    <div
                      key={skill.name}
                      className={`
                             group relative border-r border-b border-white/10 p-8 flex flex-col justify-between 
                             aspect-square md:aspect-auto md:h-[240px] clickable
                             transition-all duration-300 hover:bg-white hover:text-black
                             ${
                               i === 0 || i === 3 || i === 4
                                 ? "md:col-span-2"
                                 : "md:col-span-1"
                             }
                           `}
                    >
                      <div className="flex justify-between items-start">
                        {React.cloneElement(
                          skill.icon as React.ReactElement<any>,
                          { size: 28 }
                        )}
                        <span className="font-mono text-[10px] uppercase opacity-50 group-hover:opacity-100">
                          0{i + 1}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display text-2xl font-bold uppercase mb-2 leading-none">
                          {skill.name}
                        </h4>
                        <div className="w-full h-[1px] bg-current opacity-20 group-hover:opacity-100 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/20 pt-24 pb-12 flex flex-col md:flex-row justify-between items-end gap-12 text-white">
            <div>
              <h2 className="font-display text-6xl md:text-8xl font-black uppercase leading-none mb-4">
                Let's
                <br />
                Create
              </h2>
              <a
                href={`mailto:${ARTIST_INFO.socials.email}`}
                className="text-xl md:text-2xl text-gray-400 hover:text-white border-b border-gray-700 hover:border-white transition-all pb-1 inline-block clickable"
              >
                {ARTIST_INFO.socials.email}
              </a>
            </div>

            <div className="flex flex-col items-end gap-4 text-right">
              <div className="flex gap-6">
                <a
                  href={ARTIST_INFO.socials.artstation}
                  className="font-mono text-sm uppercase hover:text-gray-400 transition-colors clickable"
                >
                  ArtStation
                </a>
                <a
                  href={ARTIST_INFO.socials.linkedin}
                  className="font-mono text-sm uppercase hover:text-gray-400 transition-colors clickable"
                >
                  LinkedIn
                </a>
              </div>
              <p className="font-mono text-xs text-gray-600 mt-8">
                &copy; {new Date().getFullYear()} NOVENDRY ANGGARA PUTRA
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
