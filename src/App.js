import './App.css';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Cards from './components/Cards/Cards';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faRedo, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

library.add(faList, faRedo, faPlusCircle);

function App() {
  const [sampleText, setSampleText] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Toolbar setSampleText={setSampleText}/>
      <Cards sampleText={sampleText}/>
    </div>
  );
}

export default App;
