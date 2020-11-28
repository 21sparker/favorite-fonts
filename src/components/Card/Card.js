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
        console.log(font, font.files.regular)
        const ff = new FontFace(font.family, `url(${font.files.regular})`);
        ff.load().then(f => document.fonts.add(f));
        setDisplayText(true);
    }, [])

    return (
        <section className={styles["card"]}>
            <div className={styles["font-headers"]}>
                <h1>Roboto</h1>
                <h2>Christian Robertson</h2>
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

    // return inViewport 
    //     ? (
    //         <section className={styles["card"]} ref={forwardedRef}>
    //             <div className={styles["font-headers"]}>
    //                 <h1>Roboto</h1>
    //                 <h2>Christian Robertson</h2>
    //                 <span className={styles["add-btn"]}>
    //                     <FontAwesomeIcon icon="plus-circle" />
    //                 </span>
    //             </div>
    //             <p className={styles["font-sample-text"]}
    //                 style={style}>
    //                 {displayText 
    //                 ? sampleText === "" 
    //                     ? "They ran through the forest and found the bag."
    //                     : sampleText
    //                 : ""}
    //             </p>
    //         </section>
    //     )
    //     : null
        
}


export default Card;