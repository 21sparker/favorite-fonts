import styles from './Cards.module.css';
import data from './data.json';
import Card from '../Card/Card.js';
import React, { useState, useEffect } from 'react';


const Cards = () => {
    const [fonts, setFonts] = useState([]);

    useEffect(() => {
        const items = data.items;
        setFonts(items);
    });

    return (
        <div className={styles.container}>
            {fonts.map(f => <Card font={f} />)}
        </div>
    )
}

export default Cards;