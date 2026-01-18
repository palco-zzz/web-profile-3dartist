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
    id: "calavera-gentleman",
    title: "Calavera Gentleman",
    category: "Character",
    polycount: 22500,
    software: ["Blender", "Substance 3D Painter", "ZBrush", "Marmoset"],
    description:
      'A stylized fusion of Dia de los Muertos aesthetics and formal fashion. This character features intricate hand-painted geometric patterns on the skull, contrasted with procedural fabric textures on the suit. The goal was to create a high-fidelity "designer toy" aesthetic with PBR materials, focusing on clean topology and vibrant color theory.',
    sketchfabId: "",
    images: {
      // PLACEMENT: Put your side-profile skull image here
      hero: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2500&auto=format&fit=crop",
      beauty: [
        // PLACEMENT: Put your front/back view images here
        "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2500&auto=format&fit=crop",
      ],
      // PLACEMENT: Put your wireframe render here
      wireframe:
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2500&auto=format&fit=crop&saturation=-100",
      textures: [
        {
          name: "Albedo",
          url: "https://picsum.photos/seed/calavera-alb/500/500",
        },
        {
          name: "Roughness",
          url: "https://picsum.photos/seed/calavera-rgh/500/500",
        },
        {
          name: "Metallic",
          url: "https://picsum.photos/seed/calavera-met/500/500",
        },
      ],
    },
  },
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
    id: "scifi-trooper",
    title: "Heavy Assault Trooper",
    category: "Character",
    polycount: 65000,
    software: ["ZBrush", "Blender", "Substance 3D Painter", "Photoshop"],
    description:
      "A next-gen game ready character designed for a sci-fi shooter. Focused on hard-surface blending with cloth simulation. The armor pieces were modeled using boolean workflows in Blender, while the undersuit features cloth sculpting refined in ZBrush.",
    sketchfabId: "",
    images: {
      hero: "https://picsum.photos/seed/noven-trooper/1200/800",
      beauty: [
        "https://picsum.photos/seed/noven-trooper-1/1200/800",
        "https://picsum.photos/seed/noven-trooper-2/1200/800",
      ],
      wireframe: "https://picsum.photos/seed/noven-trooper/1200/800?grayscale",
      textures: [
        {
          name: "Albedo",
          url: "https://picsum.photos/seed/mat-albedo/500/500",
        },
        {
          name: "Normal",
          url: "https://picsum.photos/seed/mat-normal/500/500",
        },
        {
          name: "Roughness",
          url: "https://picsum.photos/seed/mat-rough/500/500?grayscale",
        },
        {
          name: "Metallic",
          url: "https://picsum.photos/seed/mat-metal/500/500?grayscale",
        },
      ],
    },
  },
  {
    id: "antique-revolver",
    title: "Vintage Magnum Revolver",
    category: "Product Design",
    polycount: 12000,
    software: ["Blender", "Substance 3D Painter", "Photoshop"],
    description:
      "A highly detailed antique firearm. The focus was on realistic texturing, specifically wood grain wear and metal oxidation (rust/patina) to tell the story of a weapon that has seen decades of use.",
    images: {
      hero: "https://picsum.photos/seed/noven-gun/1200/800",
      beauty: [
        "https://picsum.photos/seed/noven-gun-1/1200/800",
        "https://picsum.photos/seed/noven-gun-2/1200/800",
      ],
      wireframe: "https://picsum.photos/seed/noven-gun/1200/800?grayscale",
      textures: [
        {
          name: "Albedo",
          url: "https://picsum.photos/seed/gun-albedo/500/500",
        },
        {
          name: "Normal",
          url: "https://picsum.photos/seed/gun-normal/500/500",
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
  {
    id: "fantasy-ruins",
    title: "Eldritch Ruins Environment",
    category: "Architecture",
    polycount: 150000,
    software: ["Blender", "ZBrush", "Substance 3D Painter"],
    description:
      "Modular environment kit created for a fantasy RPG. Utilizes trim sheets for the stone architecture and vertex painting for moss/dirt blending. Rendered in Blender Cycles.",
    images: {
      hero: "https://picsum.photos/seed/noven-ruins/1200/600",
      beauty: [
        "https://picsum.photos/seed/noven-ruins-1/1200/800",
        "https://picsum.photos/seed/noven-ruins-2/1200/800",
      ],
      wireframe: "https://picsum.photos/seed/noven-ruins/1200/600?grayscale",
      textures: [
        {
          name: "Trim Sheet",
          url: "https://picsum.photos/seed/ruins-trim/500/500",
        },
        {
          name: "Moss Alpha",
          url: "https://picsum.photos/seed/ruins-moss/500/500",
        },
      ],
    },
  },
  {
    id: "creature-bust",
    title: "Abyssal Creature Bust",
    category: "Creature",
    polycount: 25000,
    software: ["ZBrush", "Substance 3D Painter", "Photoshop"],
    description:
      "A study in organic sculpting and subsurface scattering. This creature concept explores aquatic alien anatomy. Sculpted in ZBrush and composited in Photoshop.",
    images: {
      hero: "https://picsum.photos/seed/noven-creature/1000/1000",
      beauty: ["https://picsum.photos/seed/noven-creature-1/1000/1000"],
      wireframe:
        "https://picsum.photos/seed/noven-creature/1000/1000?grayscale",
      textures: [
        {
          name: "SSS Color",
          url: "https://picsum.photos/seed/skin-color/500/500",
        },
        {
          name: "Displacement",
          url: "https://picsum.photos/seed/skin-disp/500/500",
        },
      ],
    },
  },
  {
    id: "cyber-vehicle",
    title: "Hover-Bike Prototype",
    category: "Verestrium Legacy",
    polycount: 45000,
    software: ["Blender", "Photoshop", "Krita"],
    description:
      "Hard surface vehicle design. Modeled using boolean operations in Blender. The design language mixes industrial machinery with aerodynamic racing aesthetics. Final paint-over done in Krita.",
    images: {
      hero: "https://picsum.photos/seed/noven-bike/1200/800",
      beauty: ["https://picsum.photos/seed/noven-bike-1/1200/800"],
      wireframe: "https://picsum.photos/seed/noven-bike/1200/800?grayscale",
      textures: [
        {
          name: "Paint Mask",
          url: "https://picsum.photos/seed/bike-mask/500/500",
        },
      ],
    },
  },
  {
    id: "prop-radio",
    title: "Military Field Radio",
    category: "Product Design",
    polycount: 4500,
    software: ["Blender", "Substance 3D Painter"],
    description:
      "A hero prop for a FPS game. High poly modeling done in Blender. Texturing in Substance 3D Painter focuses on storytelling: tape residue, scratches, and dust accumulation.",
    images: {
      hero: "https://picsum.photos/seed/noven-radio/1000/1000",
      beauty: ["https://picsum.photos/seed/noven-radio-1/1000/1000"],
      wireframe: "https://picsum.photos/seed/noven-radio/1000/1000?grayscale",
      textures: [
        { name: "Albedo", url: "https://picsum.photos/seed/radio-alb/500/500" },
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
