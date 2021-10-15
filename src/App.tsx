import { Header } from './components/Header';
import { TaskList } from './components/Task';
import Modal from 'react-modal'

import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root')

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <TaskList 
      />
    </>
  )
}

export default App;
