import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const Card = ({ font }) => {
    const [displayText, setDisplayText] = useState(false);

    const style = {
        fontSize: "18px",
        fontFamily: font.family,
    }

    useEffect(() => {
        // const ff = new FontFace(font.family, `url(${font.files.regular})`);
        // ff.load().then(f => document.fonts.add(f));
        setDisplayText(true);
    })

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
                {displayText ? "Text that goes here about the thing." : ""}
            </p>
        </section>
    )
}

export default Card;