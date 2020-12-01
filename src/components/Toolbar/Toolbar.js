import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Toolbar.module.css';

const Toolbar = (props) => {
    const { fontSize, setFontSize, 
            searchText, searchFonts,
            sampleText, setSampleText,
            resetApp } = props;

    return (
        <div className={styles.container}>
            <div className={styles.toolbar}>
                <div className={styles['search-container']}>
                    <input
                        type='text'
                        value={searchText}
                        placeholder='Search fonts'
                        className={styles['search-input']}
                        onChange={e => searchFonts(e.target.value)}/>
                </div>
                <div className={styles['sample-container']}>
                    <input
                        type='text'
                        value={sampleText}
                        placeholder='Type Something'
                        className={styles['sample-input']}
                        onChange={e => setSampleText(e.target.value)}/>
                </div>
                <div className={styles['font-size-container']}>
                    <select 
                        value={fontSize}
                        className={styles['font-size-input']} 
                        onChange={e => setFontSize(e.target.value)}>
                        <option value="8px">8px</option>
                        <option value="12px">12px</option>
                        <option value="16px">16px</option>
                        <option value="24px">24px</option>
                        <option value="32px">32px</option>
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
                    <button onClick={resetApp}>
                        <FontAwesomeIcon icon="redo"/>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Toolbar;