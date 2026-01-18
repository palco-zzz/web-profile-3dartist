import React from 'react';
import { ARTIST_INFO } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-12 border-t border-surfaceHighlight mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <h3 className="text-xl font-bold text-white tracking-tighter">ALEX.3D</h3>
            <p className="text-textMuted text-sm mt-1">Creating worlds, one polygon at a time.</p>
        </div>
        
        <div className="flex gap-6">
            <a href={ARTIST_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
                <Linkedin size={24} />
            </a>
            <a href={`mailto:${ARTIST_INFO.socials.email}`} className="text-textMuted hover:text-white transition-colors">
                <Mail size={24} />
            </a>
        </div>

        <div className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Alex Render. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;