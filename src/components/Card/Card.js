import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {
    const style = {
        fontSize: "18px",
        fontFamily: "serif"
    }

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
                Text that goes here about the thing.
            </p>
        </section>
    )
}

export default Card;