import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faRedo, faPlusCircle, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/Toolbar/Toolbar';
import Cards from './components/Cards/Cards';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Footer from './components/Footer/Footer';

import './App.css';

library.add(faList, faRedo, faPlusCircle, faArrowCircleUp);

function App() {
  const [searchText, setSearchText] = useState("");
  const [sampleText, setSampleText] = useState("");
  const [fonts, setFonts] = useState([]);
  const [filteredFonts, setFilteredFonts] = useState([]);
  const [displayedFonts, setDisplayedFonts] = useState([]);
  const [moreFontsToDisplay, setMoreFontsToDisplay] = useState(true);
  const [fontSize, setFontSize] = useState("16px");
  const [hideCards, setHideCards] = useState(false)

  const itemsPerPage = 20;

  useEffect(() => {
    fetch("https://favorite-fonts-backend.herokuapp.com/getdata")
      .then(res => res.json())
      .then(resJson => {
        setFonts(resJson.items);
        setFilteredFonts(resJson.items);
        setDisplayedFonts(filteredFonts.slice(0, itemsPerPage));
      })
      .catch(err => console.log(err))
  }, []);

  const searchFonts = async(query) => {
    setSearchText(query);
    await setHideCards(true);
    const lowerSearchText = query.toLowerCase();
    
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
    if (filteredFonts.length !== 0) {
      setDisplayedFonts(filteredFonts.slice(0, page*itemsPerPage+itemsPerPage));
      setMoreFontsToDisplay(page*itemsPerPage+itemsPerPage <= filteredFonts.length);      
    }
  }

  const resetApp = async () => {
    await fetch("https://favorite-fonts-backend.herokuapp.com/getdata")
      .then(res => res.json())
      .then(resJson => {
        setFonts(resJson.items);
        setFilteredFonts(resJson.items);
        setDisplayedFonts(filteredFonts.slice(0, itemsPerPage));
      })
      .catch(err => console.log(err))

    searchFonts("");
    setSearchText("");
    setSampleText("");
    setFontSize("16px");
  }

  return (
    <div className="App">
      <Navbar />
      <Toolbar 
        searchText={searchText}
        setSearchText={setSearchText}
        sampleText={sampleText}
        setSampleText={setSampleText}
        fontSize={fontSize}
        setFontSize={setFontSize}
        searchFonts={searchFonts}
        resetApp={resetApp}/>
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
