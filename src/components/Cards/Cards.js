import styles from './Cards.module.css';
import data from './data.json';
import Card from '../Card/Card.js';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const Cards = (props) => {
    const [fonts, setFonts] = useState([]);
    const [loadedFonts, setLoadedFonts] = useState([]);
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);
    
    const itemsPerPage = 25;

    useEffect(() => {
        const items = data.items;
        console.log(items.length)
        setFonts(items);
        setLoadedFonts(items.slice(0, itemsPerPage));
        setHasMoreItems(true)
        setInitialLoad(false);
    }, []);



    const loadItems = async (page) => {
        setInitialLoad(false);

        const loadedFonts = fonts.slice(0, page*itemsPerPage+itemsPerPage);
        setLoadedFonts(loadedFonts);

        const hasMoreItems = page*itemsPerPage+itemsPerPage <= fonts.length;
        setHasMoreItems(hasMoreItems);
    }

    return (
        <InfiniteScroll
            initialLoad={initialLoad}
            pageStart={0}
            loadMore={loadItems}
            hasMore={hasMoreItems}>
            
            <div className={styles.container}>
                {loadedFonts.map(f => 
                            <Card 
                                font={f}
                                sampleText={props.sampleText} 
                                key={f.family} />)}
            </div>
        </InfiniteScroll>
    )
}

export default Cards;