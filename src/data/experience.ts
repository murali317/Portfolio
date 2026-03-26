export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  type: 'full-time' | 'internship';
  companyInitial: string;
  accentColor: string;
  bullets: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'UI Developer',
    company: 'Accenture',
    location: 'Bangalore, India',
    start: 'Feb 2024',
    end: 'April 2026',
    current: true,
    type: 'full-time',
    companyInitial: 'A',
    accentColor: '#a100ff', // Accenture purple
    bullets: [
      'Developed scalable, performance-optimized React applications using TypeScript, Zod, and React Router within a micro-frontend architecture, reducing production runtime errors by 25% and improving API workflows for 20k+ users.',
      'Maintained high CI/CD pipeline efficiency with GitHub Actions, cutting deployment time by 30% and ensuring consistent, reliable builds.',
      'Conducted peer code reviews and enforced coding standards, reducing defect rates to <15% with strong test coverage using React Testing Library.',
      'Delivered 95% of sprint commitments through active participation in Agile planning, estimation, and JIRA-based task tracking, collaborating with cross-functional teams.',
      'Applied design patterns and cross-browser compatibility strategies to ensure consistent UI behavior across modern browsers.',
      'Leveraged Generative AI tools (Claude, Cursor) for component scaffolding, debugging, and code optimization, improving development velocity.',
      'Experimented with AI-driven UI generation tools (v0.dev) to accelerate design-to-code workflows in React.',
    ],
    techStack: ['React', 'TailwindCSS', 'TypeScript', 'Zod', 'Figma', 'React Router', 'Playwright', 'Storybook', 'GitHub Actions', 'React Testing Library', 'Vite', 'API Integration', 'Agile', 'Claude', 'git'],
  },
  {
    id: 2,
    role: 'Frontend Developer Intern',
    company: 'Indbytes Technologies',
    location: 'Kerala, India',
    start: 'Aug 2023',
    end: 'Sept 2023',
    current: false,
    type: 'internship',
    companyInitial: 'I',
    accentColor: '#63b3ed',
    bullets: [
      'Developed and deployed user-friendly front-end web pages for the KidsBuddy educational application, utilizing HTML, CSS, and JavaScript — improving user engagement by 25%.',
      'Collaborated with the UX team to design and implement scalable front-end architecture, ensuring seamless functionality and reducing page load times by 30%.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'UX Collaboration'],
  },
];
