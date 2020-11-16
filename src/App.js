import './App.css';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faRedo } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faRedo);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
    </div>
  );
}

export default App;
