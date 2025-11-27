export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  labels: string[];
  assignees: string[];
  checklist: ChecklistItem[];
  dueDate?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}