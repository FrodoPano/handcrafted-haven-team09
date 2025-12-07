import { Task } from '@/types/task';

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: Task['status']) => void;
  onChecklistToggle: (taskId: string, itemId: string) => void;
}

export default function TaskCard({ task, onStatusChange, onChecklistToggle }: TaskCardProps) {
  const progress = task.checklist.filter(item => item.completed).length;
  const total = task.checklist.length;
  const progressPercentage = total > 0 ? (progress / total) * 100 : 0;

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo': return '#8e511b';
      case 'in-progress': return '#896c4a';
      case 'done': return '#2b352c';
      default: return '#695d47';
    }
  };

  return (
    <div 
      className="rounded-lg p-4 shadow-md mb-4"
      style={{ backgroundColor: '#f8f5f0', borderLeft: `4px solid ${getStatusColor(task.status)}` }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif font-semibold text-lg" style={{ color: '#2b352c' }}>
          {task.title}
        </h3>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
          className="text-sm rounded px-2 py-1"
          style={{ backgroundColor: '#d3c6b4', color: '#2b352c', border: '1px solid #b6a48c' }}
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <p className="text-sm mb-3 font-serif" style={{ color: '#695d47' }}>
        {task.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {task.labels.map((label, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full"
            style={{ backgroundColor: '#b6a48c', color: '#2b352c' }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1 font-serif">
          <span style={{ color: '#695d47' }}>Progress</span>
          <span style={{ color: '#8e511b' }}>{progress}/{total} ({Math.round(progressPercentage)}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: '#8e511b', 
              width: '${progressPercentage}%' 
            }}
          ></div>
        </div>
      </div>

      <div className="mb-3">
        <h4 className="font-serif font-semibold text-sm mb-2" style={{ color: '#2b352c' }}>
          Checklist:
        </h4>
        <div className="space-y-1">
          {task.checklist.map((item) => (
            <label key={item.id} className="flex items-center space-x-2 text-sm font-serif">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onChecklistToggle(task.id, item.id)}
                className="rounded"
                style={{ color: '#8e511b' }}
              />
              <span style={{ 
                color: item.completed ? '#695d47' : '#2b352c',
                textDecoration: item.completed ? 'line-through' : 'none'
              }}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="font-serif" style={{ color: '#695d47' }}>
          Assignees: {task.assignees.join(', ')}
        </span>
      </div>
    </div>
  );
}