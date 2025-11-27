import { Task } from '@/types/task';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Set up Next.js application with TypeScript',
    description: 'Initialize Next.js app with create-next-app@latest using TypeScript, ESLint, and src directory',
    status: 'todo',
    labels: ['setup', 'development'],
    assignees: ['Carter Arnold'],
    checklist: [
      { id: '1-1', text: 'Run create-next-app command', completed: true },
      { id: '1-2', text: 'Verify TypeScript configuration', completed: true },
      { id: '1-3', text: 'Confirm ESLint is working', completed: true },
      { id: '1-4', text: 'Set up src directory structure', completed: true }
    ]
  },
  {
    id: '2',
    title: 'Implement landing page layout',
    description: 'Create basic landing page structure with header, hero, features, and footer sections',
    status: 'in-progress',
    labels: ['frontend', 'layout'],
    assignees: ['Jake Preciado'],
    checklist: [
      { id: '2-1', text: 'Create page.tsx structure', completed: true },
      { id: '2-2', text: 'Implement header component', completed: true },
      { id: '2-3', text: 'Build hero section', completed: true },
      { id: '2-4', text: 'Add features grid', completed: false },
      { id: '2-5', text: 'Create footer', completed: false }
    ]
  },
  {
    id: '3',
    title: 'Add color scheme and typography',
    description: 'Implement the earthy tone color palette and EB Garamond/Cormorant Garamond fonts',
    status: 'todo',
    labels: ['design', 'styling'],
    assignees: ['Frodo Pano'],
    checklist: [
      { id: '3-1', text: 'Add color variables to CSS', completed: false },
      { id: '3-2', text: 'Configure Google Fonts in layout', completed: false },
      { id: '3-3', text: 'Apply colors to components', completed: false },
      { id: '3-4', text: 'Test font rendering', completed: false }
    ]
  },
  {
    id: '4',
    title: 'Create responsive navigation',
    description: 'Build navigation that works on desktop, tablet, and mobile devices',
    status: 'todo',
    labels: ['frontend', 'responsive'],
    assignees: ['Carter Arnold'],
    checklist: [
      { id: '4-1', text: 'Desktop navigation layout', completed: false },
      { id: '4-2', text: 'Mobile hamburger menu', completed: false },
      { id: '4-3', text: 'Responsive breakpoints', completed: false },
      { id: '4-4', text: 'Active state styling', completed: false }
    ]
  },
  {
    id: '5',
    title: 'Add hero section with CTA',
    description: 'Implement compelling hero section with "Explore Collection" call-to-action button',
    status: 'todo',
    labels: ['frontend', 'marketing'],
    assignees: ['Jake Preciado'],
    checklist: [
      { id: '5-1', text: 'Hero text and styling', completed: false },
      { id: '5-2', text: 'CTA button with hover effects', completed: false },
      { id: '5-3', text: 'Background styling', completed: false },
      { id: '5-4', text: 'Mobile responsiveness', completed: false }
    ]
  }
];