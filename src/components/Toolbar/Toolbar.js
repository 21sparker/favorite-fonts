import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Toolbar.module.css';

const Toolbar = (props) => {
    const [fontSize, setFontSize] = useState(props.initialFontSize);

    const handleSampleTextChange = e => {
        props.setSampleText(e.target.value);
    }

    const handleSearchTextChange = e => {
        props.searchFonts(e.target.value);
    }

    const handleFontSizeValueChange = e => {
        setFontSize(e.target.value);
        props.setFontSize(e.target.value + "px");
    }

    const handleResetBtnClick = e => {
        props.resetApp();
    }

    return (
        <div className={styles.container}>
            <div className={styles.toolbar}>
                <div className={styles['search-container']}>
                    <input
                        type='text'
                        placeholder='Search fonts'
                        className={styles['search-input']}
                        onChange={handleSearchTextChange}/>
                </div>
                <div className={styles['sample-container']}>
                    <input
                        type='text'
                        placeholder='Type Something'
                        className={styles['sample-input']}
                        onChange={handleSampleTextChange}/>
                </div>
                <div className={styles['font-size-container']}>
                    <select 
                        value={fontSize}
                        className={styles['font-size-input']} 
                        onChange={handleFontSizeValueChange}>
                        <option value="8">8px</option>
                        <option value="12">12px</option>
                        <option value="16">16px</option>
                        <option value="24">24px</option>
                        <option value="32">32px</option>
                    </select>
                </div>
                <div className={styles["toolbar-btns"]}>
                    <div className={styles['dark-mode-input']}>
                        <input type="radio" name="mode" value="Light" />
                        <input type="radio" name="mode" value="Dark" />
                    </div>                    
                    <button>
                        <FontAwesomeIcon icon="list"/>
                    </button>                    
                    <button onClick={handleResetBtnClick}>
                        <FontAwesomeIcon icon="redo"/>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Toolbar;