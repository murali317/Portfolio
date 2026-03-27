export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'frontend' | 'fullstack' | 'backend';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MangalamIndia – Product Landing Page',
    description: 'A high-performance product landing page for Mangalam HDPE Pipes & Coils with advanced interactivity — zoom lens, carousel, modals, and lead capture.',
    longDescription: 'A fully responsive, feature-rich product landing page built with pure HTML, CSS & Vanilla JS — zero dependencies. Features include a hero image carousel with 2.5× zoom lens, FAQ accordion, applications slider, manufacturing process tabs, infinite testimonials marquee, and accessible modal-based quote & datasheet download forms.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'CSS Variables', 'IntersectionObserver', 'Responsive'],
    category: 'frontend',
    githubUrl: 'https://github.com/murali317/Gushwork',
    liveUrl: 'https://mangalamindia.netlify.app/',
    featured: true,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    id: 2,
    title: 'JSON Tree Visualizer',
    description: 'An interactive JSON tree visualizer that converts any JSON into an expandable graph with search, path copy, theme toggle, and PNG export.',
    longDescription: 'Built with React and React Flow, this tool instantly renders any JSON as an interactive node graph. Features include search & highlight with multi-match navigation, one-click JSON path copy, dark/light mode, and export to PNG using html-to-image.',
    tags: ['React', 'React Flow', 'TailwindCSS', 'Vite', 'html-to-image'],
    category: 'frontend',
    githubUrl: 'https://github.com/murali317/Json-tree-visualizer',
    liveUrl: 'https://json-tree-visualizer-apiwiz.netlify.app/',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  },
  {
    id: 3,
    title: 'Spotify Tracks App',
    description: 'A full-featured table management app handling 30,000+ Spotify records with sorting, filtering, pagination, CSV export, and bulk operations.',
    longDescription: 'Built with React, TypeScript, and TanStack Table v8 to demonstrate enterprise-grade data handling. Supports global search, per-column filters, multi-row selection, pagination-aware select-all, CSV export, and row deletion — all client-side with no backend.',
    tags: ['React', 'TypeScript', 'TanStack Table', 'TailwindCSS', 'PapaParse', 'Vite'],
    category: 'frontend',
    githubUrl: 'https://github.com/murali317/30000-Spotify-Records-App',
    liveUrl: 'https://spotify-track-nirmaan.netlify.app/',
    featured: true,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80',
  },
  {
    id: 4,
    title: 'YOGO – Travel Planner',
    description: 'A sleek travel planning platform that helps users explore destinations and plan trips effortlessly.',
    longDescription: 'YOGO is a travel companion web app featuring destination cards, trip planning UI, and a vibrant design. Built to demonstrate responsive layouts and user-centric design patterns.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/murali317/my-portfolio',
    liveUrl: 'https://yogo-travel-planner.netlify.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
  {
    id: 5,
    title: 'FUNSHION – Fashion E-Commerce',
    description: 'A full-featured fashion e-commerce UI with product listings, animated banners, and brand showcases.',
    longDescription: 'FUNSHION is a fashion e-commerce front-end platform showcasing clothing and accessories with animated banners, product grids, trending sections, and social feed integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'frontend',
    githubUrl: 'https://github.com/murali317/my-portfolio',
    liveUrl: 'https://funshion-e-commerce.netlify.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
  },
];

