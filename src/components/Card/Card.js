import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const Card = ({ font, sampleText }) => {

    const [displayText, setDisplayText] = useState(false);

    const style = {
        fontSize: "18px",
        fontFamily: font.family,
    }

    useEffect(() => {
        let variant = 'regular'
        if (!font.variants.includes('regular')) {
            variant = font.variants[font.variants.length - 1];
        }

        const ff = new FontFace(font.family, `url(${font.files[variant]})`);
        ff.load()
          .then(f => document.fonts.add(f))
          .catch(e => console.log(font));
        setDisplayText(true);
    }, [])

    return (
        <section className={styles["card"]}>
            <div className={styles["font-headers"]}>
                <h1>{font.family}</h1>
                <span className={styles["add-btn"]}>
                    <FontAwesomeIcon icon="plus-circle" />
                </span>
            </div>
            <p className={styles["font-sample-text"]}
                style={style}>
                {displayText
                ? sampleText === "" 
                    ? "They ran through the forest and found the bag."
                    : sampleText
                : ""}
            </p>
        </section>
    )
}


export default Card;