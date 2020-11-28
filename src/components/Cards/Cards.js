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
    const [num, setNum] = useState(0);
    
    const itemsPerPage = 30;

    useEffect(() => {
        const items = data.items;
        console.log(items.slice(0,50))
        setFonts(items.slice(0,50));
    }, []);

    useEffect(() => {
        console.log("num changed");   
    }, [num])
    // useEffect(() => {
    //     console.log(isLoading);
    //     console.log(loadedFonts);
    // }, [isLoading, loadedFonts]);

    const loadItems = async (page) => {
        console.log("Called")
        // if (isLoading) {
        //     console.log("Ran here")
        //     return;
        // }
        setNum(num + 1);

        // await setIsLoading(true);
        // console.log("Called", page)
        // console.log(itemsPerPage);
        // const loadedFonts = fonts.slice(page*itemsPerPage, page*itemsPerPage+itemsPerPage);
        // await setLoadedFonts(loadedFonts);

        // const hasMoreItems = page*itemsPerPage+itemsPerPage >= fonts.length;
        // console.log("Has more items ", page*itemsPerPage+itemsPerPage)
        // if (!hasMoreItems) {
        //     await setHasMoreItems(false);
        // }
        // await setIsLoading(false);
        // setHasMoreItems(false);

    }

    return (
        <InfiniteScroll
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

    // return (
    //     <div className={styles.container}>
    //         {fonts.map(f => <ViewportCard font={f} sampleText={props.sampleText}  key={f.family}
    //                         onEnterViewport={() => console.log("Enter")} onLeaveViewport={() => console.log("Leave")}/>)}
    //     </div>
    // )
}

export default Cards;