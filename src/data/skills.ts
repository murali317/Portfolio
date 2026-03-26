export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'concepts';
  level: number; // 0–100
  color: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5',                icon: '🌐', category: 'frontend',  level: 95, color: '#e34c26' },
  { name: 'CSS3',                 icon: '🎨', category: 'frontend',  level: 90, color: '#264de4' },
  { name: 'JavaScript',           icon: '⚡', category: 'frontend',  level: 85, color: '#f7df1e' },
  { name: 'TypeScript',           icon: '🔷', category: 'frontend',  level: 80, color: '#3178c6' },
  { name: 'React',                icon: '⚛️', category: 'frontend',  level: 78, color: '#61dafb' },
  { name: 'TailwindCSS',          icon: '💨', category: 'frontend',  level: 85, color: '#38bdf8' },
  // Backend
  { name: 'Python',               icon: '🐍', category: 'backend',   level: 80, color: '#3776ab' },
  { name: 'REST API Integration', icon: '🔌', category: 'backend',   level: 82, color: '#6366f1' },
  // Database
  { name: 'MySQL',                icon: '🗄️', category: 'database',  level: 78, color: '#4479a1' },
  // Tools
  { name: 'Git',                  icon: '🔀', category: 'tools',     level: 85, color: '#f05032' },
  { name: 'GitHub',               icon: '🐙', category: 'tools',     level: 88, color: '#aaaaaa' },
  { name: 'GitHub Copilot',       icon: '🤖', category: 'tools',     level: 80, color: '#6e40c9' },
  { name: 'Claude Code',          icon: '🧬', category: 'tools',     level: 78, color: '#d97706' },
  { name: 'Storybook',            icon: '📖', category: 'tools',     level: 68, color: '#ff4785' },
  { name: 'React Testing Lib',    icon: '🧪', category: 'tools',     level: 70, color: '#e33332' },
  // Concepts
  { name: 'DSA',                  icon: '🧠', category: 'concepts',  level: 75, color: '#10b981' },
];

export const skillCategories = ['all', 'frontend', 'backend', 'database', 'tools', 'concepts'] as const;
