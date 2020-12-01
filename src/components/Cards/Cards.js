import styles from './Cards.module.css';
import Card from '../Card/Card.js';
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const Cards = (props) => {
    const {fonts, sampleText, loadFonts, hasMoreFonts, fontSize} = props;

    useEffect(() => {

    },[])
    
    const loadItems = (page) => {
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