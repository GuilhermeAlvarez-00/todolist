import { useState } from "react";
import { useTasks } from "../../hooks/useTask";
import { EditTaskModal } from "../EditTaskModal";
import { Button, Container, Task, TaskContainer } from "./styles";

/* interface TaskListProps {
  openEditModal: () => void;
} */

export function TaskList() {
  const { tasks, deleteTask } = useTasks()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idTask, setIdTask] = useState(0)

  function handleOpenEditModal(id: number) {
    setIdTask(id)
    setIsModalOpen(true)
  }

  function handleCloseEditModal() {
    setIsModalOpen(false)
  }

  function handleDeleteTask(id: number) {
    deleteTask(id)
  }

  return (
    <Container>
       <TaskContainer>
       <EditTaskModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseEditModal}
          idTask={idTask}
        />
         {tasks.map(task => (
          <Task key={task.id}>
            {task.title}
            <div>
              <Button buttonEdit={true} onClick={() => handleOpenEditModal(task.id)}>
                <i className="fas fa-pen"></i>
              </Button>
              <Button 
                buttonEdit={false}
                onClick={() => handleDeleteTask(task.id)}
              >
                <i className="fas fa-trash"></i>
              </Button>
            </div>
          </Task>
        ))} 
      </TaskContainer>
    </Container>
  )
}