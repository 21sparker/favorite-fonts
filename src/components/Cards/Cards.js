import styles from './Cards.module.css';
import data from './data.json';
import Card from '../Card/Card.js';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const Cards = (props) => {
    const {fonts, sampleText, loadFonts, hasMoreFonts, fontSize} = props;

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(counter+1);
        console.log("Counter ", counter);
    },[fonts, sampleText, loadFonts, hasMoreFonts, fontSize])
    
    const loadItems = (page) => {
        console.log(page);
        loadFonts(page)
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