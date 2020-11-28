import { useState } from 'react';
import styles from './ScrollButton.module.css';
import useInterval from '../../hooks/useInterval';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollButton = (props) => {
    const [isRunning, setIsRunning] = useState(false);

    const scrollStep = () => {
        if (window.pageYOffset === 0) {
            setIsRunning(false);
        }
        window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    }

    useInterval(scrollStep, isRunning ? props.delayInMs : null);

    return (
        <button
            title='Back to top'
            onClick={() => setIsRunning(true)}
            className={styles['scroll']}
            >
            <FontAwesomeIcon icon="arrow-circle-up" />
        </button>
    )
}


export default ScrollButton;