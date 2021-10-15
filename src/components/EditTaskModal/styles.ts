import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 42.8rem;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 2rem 0 2rem;
    font-weight: normal;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4.8rem 0 2rem;
    gap: 1rem;
  }
`

export const Input = styled.input`
    width: 100%;
  height: 3.8rem;
  border: 0.2rem solid #FFF;
  background-color: transparent;
  border-radius: 0.4rem;
  color: #FFF;
  font-size: 1.7rem;
  font-weight: 300;
  padding-left: 1rem;

  &::placeholder {
    font-size: 1.7rem;
    font-weight: 300;
  }

  &:hover,
  &:focus {
    outline: 0;
    border: 0.2rem solid var(--blue);
  }
`

interface ButtonProps {
  buttonConfirm: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.8rem;
  font-weight: 500;
  border: 0.2rem solid ${props => props.buttonConfirm ? 'var(--green)' : 'var(--red)'};
  background-color: transparent;
  color: #FFF;
  width: 100%;
  height: 3.8rem;
  padding: 0 2.4rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    color: white;
    background-color: ${props => props.buttonConfirm ? 'var(--green)' : 'var(--red)'};
  }
`
