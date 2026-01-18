import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";

import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

// Minimal Custom Cursor Component
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.classList.contains("clickable")
      );
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`
        relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-white transition-all duration-300 ease-out
        ${isHovering ? "w-12 h-12 bg-white" : "w-4 h-4 bg-transparent"}
      `}
      ></div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="min-h-screen w-full bg-background text-white selection:bg-white selection:text-black">
        <AnimatedRoutes isLoading={isLoading} setIsLoading={setIsLoading} />
        <Cursor />
      </div>
    </Router>
  );
};

// Extracted to use useLocation hook
const AnimatedRoutes = ({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} key="loading" />
      ) : (
        // @ts-ignore
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/project/:id"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <AllProjects />
              </PageTransition>
            }
          />
        </Routes>
      )}
    </AnimatePresence>
  );
};

export default App;
