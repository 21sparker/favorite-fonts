import styles from './Cards.module.css';
import data from './data.json';
import Card from '../Card/Card.js';


const Cards = () => {
    const items = data.items;

    return (
        <div className={styles.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards;