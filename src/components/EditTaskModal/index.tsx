import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useTasks } from '../../hooks/useTask'

import { Container, Input, Button } from './styles'

interface EditTaskModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
  idTask: number,
}

export function EditTaskModal({
  isOpen, 
  onRequestClose,
  idTask 
  }: EditTaskModalProps) {
  const { tasks, updateTask } = useTasks()
  const [newTitleTask, setNewTitleTask] = useState('')

  function handleEditTask() {
    const newArrayTask = tasks.map(task => 
      task.id === idTask ? {
        ...task,
        title: newTitleTask
      } : task
    )
    updateTask(newArrayTask)
    setNewTitleTask('')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    handleEditTask()
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <i className="fas fa-times"></i>
      </button>

      <Container onSubmit={handleSubmit}>
        <h2>Editar tarefa</h2>
        <Input
          type="text"
          placeholder="Edite sua tarefa"
          value={newTitleTask}
          onChange={event => setNewTitleTask(event.target.value)}
          required
        />
        <div>
          <Button 
            buttonConfirm={true}
            type="submit"
          >
            Confirmar
            <i className="fas fa-check"></i>
          </Button>
          <Button
            buttonConfirm={false}
            onClick={onRequestClose}
          >
            Cancelar
            <i className="fas fa-times"></i>
          </Button>
        </div>
      </Container>
    </Modal>
  )
}