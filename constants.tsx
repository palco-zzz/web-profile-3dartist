import React from "react";
import { Project, Skill } from "./types";
import {
  Box,
  Layers,
  PenTool,
  Monitor,
  Cpu,
  Zap,
  Gamepad2,
  Brush,
  Grid3X3,
  Wrench,
  Ghost,
  Image,
  Video,
  FileText,
  Palette,
  Film,
  Scissors,
} from "lucide-react";

// NOTE: Replace the placeholder image URLs with your actual file paths (e.g., '/assets/skull-hero.jpg')
export const PROJECTS: Project[] = [
  {
    id: "maid-character",
    title: "Maid",
    category: "Character",
    polycount: 18000,
    software: ["Blender", "ZBrush", "Substance 3D Blender"],
    description:
      "A stylized anime-inspired maid character model featuring intricate cloth simulation for the dress, detailed fabric texturing with PBR materials, and expressive character design. The model showcases clean topology optimized for game engines with hand-painted details and stylized shading.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/maid/novendry-anggara-putra-artboard-6.webp",
      beauty: [
        "/character-portfolio/maid/novendry-anggara-putra-artboard-2.webp",
        "/character-portfolio/maid/novendry-anggara-putra-artboard-3.webp",
        "/character-portfolio/maid/novendry-anggara-putra-artboard-4.webp",
        "/character-portfolio/maid/novendry-anggara-putra-artboard-5.webp",
        "/character-portfolio/maid/novendry-anggara-putra-artboard-6.webp",
        "/character-portfolio/maid/novendry-anggara-putra-artboard-7.webp",
        "/character-portfolio/maid/novendry-anggara-putra-artboard-8.webp",
      ],
      wireframe:
        "/character-portfolio/maid/novendry-anggara-putra-artboard-9.webp",
      textures: [
        {
          name: "Render 1",
          url: "/character-portfolio/maid/novendry-anggara-putra-artboard-10.webp",
        },
        {
          name: "Render 2",
          url: "/character-portfolio/maid/novendry-anggara-putra-artboard-11.webp",
        },
        {
          name: "Render 3",
          url: "/character-portfolio/maid/novendry-anggara-putra-artboard-12.webp",
        },
      ],
    },
  },
  {
    id: "kebaya-character",
    title: "Kebaya",
    category: "Character",
    polycount: 20000,
    software: ["Blender", "ZBrush", "Substance 3D Painter"],
    description:
      "A traditional Indonesian kebaya character featuring intricate batik patterns and elegant fabric draping. This character showcases cultural heritage through detailed texturing and authentic traditional attire design with modern 3D rendering techniques.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/kebaya/novendry-anggara-putra-render-4.jpg",
      beauty: [
        "/character-portfolio/kebaya/novendry-anggara-putra-render-2.jpg",
        "/character-portfolio/kebaya/novendry-anggara-putra-render-3.jpg",
        "/character-portfolio/kebaya/novendry-anggara-putra-render-4.jpg",
      ],
      wireframe:
        "/character-portfolio/kebaya/novendry-anggara-putra-render-4.jpg",
      textures: [
        {
          name: "Front View",
          url: "/character-portfolio/kebaya/novendry-anggara-putra-render-3.jpg",
        },
        {
          name: "Back View",
          url: "/character-portfolio/kebaya/novendry-anggara-putra-render-1.jpg",
        },
      ],
    },
  },
  {
    id: "schoolgirl-character",
    title: "School Girl",
    category: "Character",
    polycount: 15000,
    software: ["Blender", "ZBrush", "Substance 3D Painter"],
    description:
      "A stylized anime school girl character featuring detailed uniform design with accurate fabric folds and realistic hair styling. The model includes multiple poses and comprehensive wireframe breakdowns showcasing clean topology for animation-ready assets.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/school-girl/novendry-anggara-putra-closeup.jpg",
      beauty: [
        "/character-portfolio/school-girl/novendry-anggara-putra-tpose-front.jpg",
        "/character-portfolio/school-girl/novendry-anggara-putra-tpose-back.jpg",
        "/character-portfolio/school-girl/novendry-anggara-putra-tpose-side.jpg",
        "/character-portfolio/school-girl/novendry-anggara-putra-tpose-30.jpg",
      ],
      wireframe:
        "/character-portfolio/school-girl/novendry-anggara-putra-wireframe-front.jpg",
      textures: [
        {
          name: "Closeup Detail",
          url: "/character-portfolio/school-girl/novendry-anggara-putra-wireframe-closeup.jpg",
        },
        {
          name: "Front Wireframe",
          url: "/character-portfolio/school-girl/novendry-anggara-putra-wireframe-front.jpg",
        },
      ],
    },
  },
  {
    id: "mirene-character",
    title: "Mirene",
    category: "Character",
    polycount: 22000,
    software: ["Blender", "ZBrush", "Substance 3D Painter"],
    description:
      "Mirene is a stylized fantasy character featuring elegant design with detailed costume elements and expressive facial features. The model showcases high-quality texturing and refined sculpting techniques for game-ready character art.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/mirene/novendry-anggara-putra-mirene.jpg",
      beauty: [
        "/character-portfolio/mirene/novendry-anggara-putra-mirene2.jpg",
        "/character-portfolio/mirene/novendry-anggara-putra-mirene3.jpg",
      ],
      wireframe:
        "/character-portfolio/mirene/novendry-anggara-putra-mirene3.jpg",
      textures: [
        {
          name: "Main Render",
          url: "/character-portfolio/mirene/novendry-anggara-putra-mirene.jpg",
        },
        {
          name: "Detail View",
          url: "/character-portfolio/mirene/novendry-anggara-putra-mirene2.jpg",
        },
      ],
    },
  },
  {
    id: "highschool-girl-character",
    title: "High School Girl",
    category: "Character",
    polycount: 16500,
    software: ["Blender", "ZBrush", "Substance 3D Painter", "Photoshop"],
    description:
      "A realistic high school girl character featuring detailed uniform texturing, natural hair simulation, and expressive facial features. The model includes comprehensive turnaround views showcasing clean topology and professional texturing workflow for character modeling.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/high-school-girl/novendry-anggara-putra-closeup.jpg",
      beauty: [
        "/character-portfolio/high-school-girl/novendry-anggara-putra-front.jpg",
        "/character-portfolio/high-school-girl/novendry-anggara-putra-back.jpg",
        "/character-portfolio/high-school-girl/novendry-anggara-putra-left.jpg",
        "/character-portfolio/high-school-girl/novendry-anggara-putra-right.jpg",
      ],
      wireframe:
        "/character-portfolio/high-school-girl/novendry-anggara-putra-front.jpg",
      textures: [
        {
          name: "Closeup Detail",
          url: "/character-portfolio/high-school-girl/novendry-anggara-putra-closeup.jpg",
        },
        {
          name: "Full Body",
          url: "/character-portfolio/high-school-girl/novendry-anggara-putra-front.jpg",
        },
      ],
    },
  },
  {
    id: "alien-head-creature",
    title: "Alien Head",
    category: "Creature",
    polycount: 28000,
    software: ["Blender", "ZBrush", "Substance 3D Painter"],
    description:
      "An alien creature head design featuring detailed organic sculpting, advanced surface texturing, and expressive alien anatomy. This project showcases high-poly sculpting techniques with intricate skin detail and realistic subsurface scattering materials for creature design.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/alien-head/novendry-anggara-putra-render-1.jpg",
      beauty: [
        "/character-portfolio/alien-head/novendry-anggara-putra-render-2.jpg",
        "/character-portfolio/alien-head/novendry-anggara-putra-render-3.jpg",
      ],
      wireframe:
        "/character-portfolio/alien-head/novendry-anggara-putra-render-3.jpg",
      textures: [
        {
          name: "Main Render",
          url: "/character-portfolio/alien-head/novendry-anggara-putra-render-1.jpg",
        },
        {
          name: "Detail View",
          url: "/character-portfolio/alien-head/novendry-anggara-putra-render-2.jpg",
        },
      ],
    },
  },
  {
    id: "female-townsfolk-character",
    title: "Female Townsfolk",
    category: "Character",
    polycount: 19000,
    software: ["Blender", "ZBrush", "Substance 3D Painter"],
    description:
      "A detailed fantasy character design featuring traditional medieval clothing and realistic fabric rendering. This townsfolk character showcases meticulous attention to costume detail, natural body proportions, and professional character texturing for game-ready assets.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/female-townsfolk/novendry-anggara-putra-townfolk-female-young2.jpg",
      beauty: [
        "/character-portfolio/female-townsfolk/novendry-anggara-putra-townfolk-female-young2.jpg",
      ],
      wireframe:
        "/character-portfolio/female-townsfolk/novendry-anggara-putra-townfolk-female-young3.jpg",
      textures: [
        {
          name: "Main View",
          url: "/character-portfolio/female-townsfolk/novendry-anggara-putra-townfolk-female-young2.jpg",
        },
        {
          name: "Alternate View",
          url: "/character-portfolio/female-townsfolk/novendry-anggara-putra-townfolk-female-young3.jpg",
        },
      ],
    },
  },
  {
    id: "gowld-character",
    title: "Gowld",
    category: "Character",
    polycount: 12000,
    software: ["Blender", "Substance 3D Painter"],
    description:
      "A stylized Funko Pop-inspired character design featuring clean geometric forms, vibrant colors, and playful proportions. This project showcases character design with simplified topology, high-contrast texturing, and professional rendering for collectible figure aesthetics.",
    sketchfabId: "",
    images: {
      hero: "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v12.jpg",
      beauty: [
        "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v13.jpg",
        "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v14.jpg",
        "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v15.jpg",
      ],
      wireframe:
        "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v15.jpg",
      textures: [
        {
          name: "Render 1",
          url: "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v12.jpg",
        },
        {
          name: "Render 2",
          url: "/character-portfolio/gowld/novendry-anggara-putra-funko-2-v13.jpg",
        },
      ],
    },
  },
  {
    id: "product-showcase",
    title: "Product Visualization",
    category: "Product Design",
    polycount: 8000,
    software: ["Blender", "Substance 3D Painter", "Photoshop"],
    description:
      "A collection of high-quality product visualization renders showcasing various industrial and consumer product designs. Features realistic materials, studio lighting setups, and professional presentation aesthetics for commercial applications.",
    images: {
      hero: "/character-portfolio/product-design/novendry-anggara-putra-untitled14.jpg",
      beauty: [
        "/character-portfolio/product-design/novendry-anggara-putra-untitled15.jpg",
        "/character-portfolio/product-design/novendry-anggara-putra-untitled17.jpg",
      ],
      wireframe:
        "/character-portfolio/product-design/novendry-anggara-putra-untitled17.jpg",
      textures: [
        {
          name: "Render 1",
          url: "/character-portfolio/product-design/novendry-anggara-putra-untitled14.jpg",
        },
        {
          name: "Render 2",
          url: "/character-portfolio/product-design/novendry-anggara-putra-untitled15.jpg",
        },
      ],
    },
  },
];

export const SKILLS: Skill[] = [
  // --- Software Proficiency (From Image) ---
  { name: "Blender", category: "software", icon: <Box className="w-5 h-5" /> },
  {
    name: "Substance 3D Painter",
    category: "software",
    icon: <Layers className="w-5 h-5" />,
  },
  { name: "ZBrush", category: "software", icon: <Ghost className="w-5 h-5" /> },
  {
    name: "Photoshop",
    category: "software",
    icon: <Image className="w-5 h-5" />,
  },
  {
    name: "Illustrator",
    category: "software",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    name: "After Effects",
    category: "software",
    icon: <Video className="w-5 h-5" />,
  },
  {
    name: "Premiere",
    category: "software",
    icon: <Film className="w-5 h-5" />,
  },
  {
    name: "InDesign",
    category: "software",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Krita",
    category: "software",
    icon: <Palette className="w-5 h-5" />,
  },

  // --- Skills (From Image) ---
  {
    name: "3D Modeling",
    category: "specialty",
    icon: <Box className="w-5 h-5" />,
  },
  {
    name: "3D Animation",
    category: "specialty",
    icon: <Video className="w-5 h-5" />,
  },
  {
    name: "Texturing",
    category: "specialty",
    icon: <Brush className="w-5 h-5" />,
  },
  {
    name: "Sculpting",
    category: "specialty",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Concept Art",
    category: "specialty",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: "Digital Painting",
    category: "specialty",
    icon: <Brush className="w-5 h-5" />,
  },
  {
    name: "2D Art",
    category: "specialty",
    icon: <Image className="w-5 h-5" />,
  },
  {
    name: "Vector Illustration",
    category: "specialty",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    name: "Drawing",
    category: "specialty",
    icon: <Scissors className="w-5 h-5" />,
  },
];

export const ARTIST_INFO = {
  name: "Novendry Anggara Putra",
  role: "3D Artist",
  location: "Yogyakarta, Indonesia",
  bio: "Hello, I am a 3D & 2D enthusiast that loves explore new things. interested in game animation and design. Proficiency in some 2d and 3d software. I am able to work in a team on small or large projects.",
  socials: {
    artstation: "https://novendryanggara.artstation.com/",
    linkedin: "https://linkedin.com",
    email: "novendry.anggara@example.com",
  },
};

export const CATEGORIES = [
  "All",
  "Character",
  "Architecture",
  "Product Design",
  "2D Art",
  "Freehand Drawing",
  "Verestrium Legacy",
  "Creature",
];
