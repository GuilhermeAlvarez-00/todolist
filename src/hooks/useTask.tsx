import { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface TaskProps {
  id: number,
  title: string;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface TaskContextProps {
  tasks: TaskProps[],
  createTask: (taskData: TaskData) => void,
  deleteTask: (id: number) => void;
  updateTask: (newArrayTasks: TaskProps[]) => void;
}

interface TaskData {
  title: string
}

const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
)

export function TasksProvider({children}: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function loadAllTasks() {
    api.get('/tasks')
    .then(response => setTasks(response.data.tasks))
  }

  function deleteTask(id: number) {
    api.delete(`tasks/${id}`)
    loadAllTasks()
  }

  function updateTask(newArrayTasks: TaskProps[]) {
    setTasks(newArrayTasks)
  }

  async function createTask(taskData: TaskData) {
    const response = await api.post('/tasks', taskData)
    const { task } = response.data

    setTasks([
      ...tasks,
      task
    ])
  }

  useEffect(() => {
    api.get('/tasks')
      .then(response => setTasks(response.data.tasks))
  }, [])

  return (
    <TaskContext.Provider value ={{tasks, createTask, deleteTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TaskContext)

  return context
}
