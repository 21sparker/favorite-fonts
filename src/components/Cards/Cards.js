import styles from './Cards.module.css';
import data from './data.json';
import Card from '../Card/Card.js';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const Cards = (props) => {
    const {fonts, sampleText, loadFonts, hasMoreFonts, fontSize} = props;

    // const [fonts, setFonts] = useState([]);
    // const [loadedFonts, setLoadedFonts] = useState([]);
    // const [hasMoreItems, setHasMoreItems] = useState(true);
    // const [initialLoad, setInitialLoad] = useState(true);
    
    const itemsPerPage = 25;

    useEffect(() => {
        // setLoadedFonts(fonts.slice(0, itemsPerPage));
        // setHasMoreItems(true);
        // setInitialLoad(false);
    })
    
    const loadItems = (page) => {
        console.log(page);
        loadFonts(page)
        // setInitialLoad(false);

        // loadFonts(page);
        // const loadedFonts = fonts.slice(0, page*itemsPerPage+itemsPerPage);
        // setLoadedFonts(loadedFonts);

        // const hasMoreItems = page*itemsPerPage+itemsPerPage <= fonts.length;
        // setHasMoreItems(hasMoreItems);
    }

    return (
        <InfiniteScroll
            initialLoad={true}
            pageStart={0}
            loadMore={loadItems}
            hasMore={hasMoreFonts}
            >
            
            <div className={styles.container}>
                {fonts.map(f => 
                            <Card 
                                font={f}
                                sampleText={sampleText} 
                                key={f.family}
                                fontSize={fontSize} />)}
            </div>
        </InfiniteScroll>
    )
}

export default Cards;