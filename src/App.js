import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faRedo, faPlusCircle, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Cards from './components/Cards/Cards';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Footer from './components/Footer/Footer';

import './App.css';

import data from './components/Cards/data.json';

library.add(faList, faRedo, faPlusCircle, faArrowCircleUp);

function App() {
  const [sampleText, setSampleText] = useState("");
  const [fonts, setFonts] = useState([]);
  const [filteredFonts, setFilteredFonts] = useState([]);
  const [displayedFonts, setDisplayedFonts] = useState([]);
  const [moreFontsToDisplay, setMoreFontsToDisplay] = useState(true);
  const [fontSize, setFontSize] = useState("16px");
  const [hideCards, setHideCards] = useState(false)

  const itemsPerPage = 20;

  useEffect(() => {
    const items = data.items;
    setFonts(items);
    setFilteredFonts(items);
    setDisplayedFonts(filteredFonts.slice(0, itemsPerPage));
  }, []);

  const searchFonts = async(query) => {
    await setHideCards(true);
    const lowerSearchText = query.toLowerCase();
    
    console.log(lowerSearchText, lowerSearchText === "")
    let filteredFonts = fonts;
    if (lowerSearchText !== "") {
      filteredFonts = fonts.filter(font => font.family.toLowerCase().includes(lowerSearchText));
    }
    
    setFilteredFonts(filteredFonts);
    setDisplayedFonts(filteredFonts.slice(0, itemsPerPage));
    setMoreFontsToDisplay(itemsPerPage <= filteredFonts.length);
    setHideCards(false)
  }

  const loadFonts = (page) => {
    console.log("Ran load fonts")
    if (filteredFonts.length !== 0) {
      setDisplayedFonts(filteredFonts.slice(0, page*itemsPerPage+itemsPerPage));
      console.log("More fonts",page*itemsPerPage+itemsPerPage <= filteredFonts.length)
      setMoreFontsToDisplay(page*itemsPerPage+itemsPerPage <= filteredFonts.length);      
    }
  }

  const resetApp = () => {
    
  }

  return (
    <div className="App">
      <Navbar />
      <Toolbar 
        setSampleText={setSampleText}
        searchFonts={searchFonts}
        setFontSize={setFontSize}
        initialFontSize={"16"}/>
      {hideCards ? null : (
        <Cards 
          fonts={displayedFonts}
          sampleText={sampleText}
          loadFonts={loadFonts}
          hasMoreFonts={moreFontsToDisplay}
          fontSize={fontSize}/>
      )}
      <ScrollButton scrollStepInPx="100" delayInMs="25"/>
      <Footer />
    </div>
  );
}

export default App;
