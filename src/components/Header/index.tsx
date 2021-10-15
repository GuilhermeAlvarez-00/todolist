import { FormEvent, useState } from "react";
import { useTasks } from "../../hooks/useTask";
import { Button, Container, Input, InputContainer } from "./styles";

export function Header() {
  const [title, setTitle] = useState('')
  const { createTask } = useTasks()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    createTask({
      title
    })
    setTitle('')
  }

  return (
    <Container>
      <h2>Todo <span>list</span></h2>
      <InputContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Nome da tarefa"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
        <Button type="submit">
          Adicionar
          <i className="fas fa-plus"></i>
        </Button>
      </InputContainer>
    </Container>
  )
}