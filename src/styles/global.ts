import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #3d3d3d;
    --light-background: #4b4b4b;
    --blue: #7d5fff;
    --orange: #ffaf40;
    --red: #ff4d4d;
    --green: #3ae374;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, input, textarea {
    font-family: 'Poppins', sans-serif;

    
  }

  body {
    color: #FFF;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);

    @media (max-width: 54rem) {
      font-size: 1.4rem;
    }
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 47.6rem;
    background-color: var(--background);
    position: relative;
    padding: 2rem;
    border-radius: 0.4rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1rem;
    right: 2rem;
    color: var(--light-background);
    background-color: transparent;
    border: 0;
    font-size: 2rem;

    &:hover {
      color: #CCC;
    }
  }
`
