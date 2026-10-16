export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'C'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Background Workers', 'JWT Authentication', 'RBAC Authorization'],
  },
  {
    id: 'database',
    label: 'Databases & Caching',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'Database Transactions', 'Distributed Locking'],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    items: ['Docker', 'Git', 'GitHub', 'Postman', 'VS Code', 'Linux'],
  },
  {
    id: 'core-cs',
    label: 'Core CS & DSA',
    items: [
      'Data Structures & Algorithms',
      'Dynamic Programming',
      'Backtracking',
      'OOP Principles',
      'System Design',
      'Blockchain & Hashing',
    ],
  },
  {
    id: 'soft-skills',
    label: 'Soft Skills',
    items: ['Problem-Solving', 'Team Collaboration', 'Time Management', 'Self-Learning', 'Analytical Thinking'],
  },
]

export const skillFilterTabs = [
  { id: 'all', label: 'All' },
  ...skillGroups,
]
