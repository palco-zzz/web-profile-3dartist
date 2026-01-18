import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { Maximize2, Triangle, Box } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className={`group block relative bg-surface border border-surfaceHighlight hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${className}`}
    >
      {/* Header Strip */}
      <div className="flex justify-between items-center px-3 py-2 bg-surfaceHighlight/30 border-b border-surfaceHighlight backdrop-blur-sm">
          <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest flex items-center gap-2">
            <Box size={10} className="text-primary"/>
            {project.id.slice(0, 12)}
          </span>
          <div className="flex gap-1 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-textMuted"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-textMuted"></div>
          </div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-black">
          {/* Main Image */}
          <img 
            src={project.images.hero} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-50 group-hover:saturate-100"
          />
          
          {/* Hover Wireframe Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen pointer-events-none">
             <img 
               src={project.images.wireframe} 
               className="w-full h-full object-cover invert opacity-40"
               alt="wireframe"
             />
             {/* Scanline Effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[20%] animate-scan"></div>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end border-l-2 border-primary pl-3">
                  <div>
                    <h3 className="text-white font-bold text-xl leading-none uppercase tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-xs font-mono text-primary">
                        <span className="flex items-center gap-1"><Triangle size={10} className="rotate-180"/> {project.polycount.toLocaleString()} tris</span>
                        <span className="uppercase text-textMuted">{project.category}</span>
                    </div>
                  </div>
                  <Maximize2 size={16} className="text-white mb-1" />
              </div>
          </div>
      </div>
    </Link>
  );
};

export default ProjectCard;