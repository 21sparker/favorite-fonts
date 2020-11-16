import './App.css';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Cards from './components/Cards/Cards';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faRedo } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faRedo);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <Cards />
    </div>
  );
}

export default App;
