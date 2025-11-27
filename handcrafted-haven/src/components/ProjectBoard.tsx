'use client';

import { useState } from 'react';
import { Task } from '@/types/task';
import TaskCard from './TaskCard';
import { initialTasks } from '@/data/tasks';

export default function ProjectBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleStatusChange = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleChecklistToggle = (taskId: string, itemId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const updatedChecklist = task.checklist.map(item =>
          item.id === itemId ? { ...item, completed: !item.completed } : item
        );
        return { ...task, checklist: updatedChecklist };
      }
      return task;
    }));
  };

  const columns = [
    { id: 'todo', title: 'To Do', color: '#8e511b' },
    { id: 'in-progress', title: 'In Progress', color: '#896c4a' },
    { id: 'done', title: 'Done', color: '#2b352c' }
  ];

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#d3c6b4' }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-4" style={{ color: '#2b352c' }}>
          Project Progress
        </h2>
        <p className="text-xl font-serif text-center mb-12" style={{ color: '#695d47' }}>
          Track our team's progress on Handcrafted Haven development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <div key={column.id} className="rounded-lg p-4">
              <h3 
                className="font-serif font-bold text-xl mb-4 text-center py-2 rounded"
                style={{ backgroundColor: column.color, color: '#ffffff' }}
              >
                {column.title} ({getTasksByStatus(column.id as Task['status']).length})
              </h3>
              <div className="space-y-4">
                {getTasksByStatus(column.id as Task['status']).map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onChecklistToggle={handleChecklistToggle}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg text-center" style={{ backgroundColor: '#f8f5f0' }}>
          <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: '#2b352c' }}>
            GitHub Repository
          </h3>
          <p className="font-serif mb-4" style={{ color: '#695d47' }}>
            View our complete project board and contribute to the development:
          </p>
          <a
            href="https://github.com/jakepreciado/handcrafted-haven-team09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-serif text-lg font-semibold text-white rounded-lg transition-colors"
            style={{ backgroundColor: '#8e511b' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#695d47'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8e511b'}
          >
            Visit GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
}