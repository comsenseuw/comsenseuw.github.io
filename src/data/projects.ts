export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of your first project. Replace this with what it does and why it matters.',
    tags: ['TypeScript', 'Astro'],
    repo: 'https://github.com/comsenseuw',
  },
  {
    title: 'Project Two',
    description: 'A short description of your second project. Highlight the problem it solves.',
    tags: ['Python', 'FastAPI'],
    repo: 'https://github.com/comsenseuw',
    demo: 'https://example.com',
  },
  {
    title: 'Project Three',
    description: 'A short description of your third project. Mention the tech stack and your role.',
    tags: ['React', 'Node.js'],
    repo: 'https://github.com/comsenseuw',
  },
];
