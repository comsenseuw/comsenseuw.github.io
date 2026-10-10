export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Deep Reinforcement Learning agent in First-Person Shooter game',
    description: 'Developed an autonomous AI agent model by combining Convolutional Neural Networks (CNN) and Reinforcement Learning (RL) for classic doom game.',
    tags: ['PyTorch', 'VizDoom'],
    repo: 'https://github.com/comsenseuw/doom',
  },
  {
    title: 'AI Contact Resistance Analysis (CRA) for prescribing Predictive Maintenance Action',
    description: 'An internal private project to predict next action based on statistic for proper maintenance action.',
    tags: ['C#', 'RestAPI'],
  },
  {
    title: 'Event-Triggered Secure Consensus for Uncertain Nonlinear Multi-Agent Systems under Hybrid Denial-of-Service and False Data Injection Attacks',
    description: 'My thesis work in Multiagent System.',
    tags: ['Multiagent System', 'Python'],
  },
];
