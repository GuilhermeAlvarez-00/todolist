import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
  padding: 4.2rem 1.8rem 2.4rem;

  h2 {
    color: var(--blue);
    font-weight: 700;
    text-align: center;

    span {
      color: #FFF;
      font-weight: 300;
    }
  }
`

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.8rem;
  margin: 2rem 0;
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

export const Button = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  background-color: var(--blue);
  color: #FFF;
  height: 3.8rem;
  padding: 0 2.4rem;
  border: 0;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &:hover {
    filter: brightness(0.9);
  }
`
