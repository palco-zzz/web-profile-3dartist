import React from 'react';

export interface TextureMap {
  name: string;
  url: string;
}

export interface ProjectImages {
  hero: string;
  beauty: string[];
  wireframe: string; // Used for hover and detail section
  textures: TextureMap[];
}

export interface Project {
  id: string;
  title: string;
  category: string; // e.g., "Character", "Environment", "Prop"
  polycount: number;
  software: string[];
  description: string;
  sketchfabId?: string; // If available
  images: ProjectImages;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  category: 'software' | 'engine' | 'specialty';
}