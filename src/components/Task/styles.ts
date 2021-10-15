import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
  padding: 0 1.8rem;
`

export const TaskContainer = styled.ul`
  width: 100%;
  list-style-type: none;
`

export const Task = styled.li`
  width: 100%;
  height: 4.8rem;
  background-color: var(--light-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  margin-bottom: 0.8rem;
  border-radius: 0.4rem;
  border-left: 0.4rem solid transparent;
  font-weight: 300;

  &:hover {
    background: linear-gradient(90deg, #7c5fff73, var(--light-background));
    border-left: 0.4rem solid var(--blue);

  }

  div {
    height: 100%;
    display: inherit;
  }
`

interface ButtonProps {
  buttonEdit: boolean
}

export const Button = styled.button<ButtonProps>`
  height: 100%;
  padding: 0 0.5rem;
  border: 0.2rem solid ${props => props.buttonEdit ? 'var(--orange)' : 'var(--red)'};
  border-radius: 0.4rem;
  background-color: transparent;
  color: ${props => props.buttonEdit ? 'var(--orange)' : 'var(--red)'};

  &:nth-of-type(1) {
    margin-right: 0.8rem;
  }

  &:hover {
    color: #FFF;
    background-color: ${props => props.buttonEdit ? 'var(--orange)' : 'var(--red)'}
  }
`
