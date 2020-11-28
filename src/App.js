import './App.css';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Cards from './components/Cards/Cards';
import ScrollButton from './components/ScrollButton/ScrollButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faRedo, faPlusCircle, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

library.add(faList, faRedo, faPlusCircle, faArrowCircleUp);

function App() {
  const [sampleText, setSampleText] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Toolbar setSampleText={setSampleText}/>
      <Cards sampleText={sampleText}/>
      <ScrollButton scrollStepInPx="100" delayInMs="25"/>
    </div>
  );
}

export default App;
