import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Toolbar.module.css';

const Toolbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.toolbar}>
                <div className={styles['search-container']}>
                    <input
                        type='text'
                        placeholder='Search fonts'
                        className={styles['search-input']}/>
                </div>
                <div className={styles['sample-container']}>
                    <input
                        type='text'
                        placeholder='Type Something'
                        className={styles['sample-input']}/>
                </div>
                <div className={styles['font-size-container']}>
                    <select className={styles['font-size-input']}>
                        <option value="8">8px</option>
                        <option value="12">12px</option>
                        <option value="16">16px</option>
                        <option value="24">24px</option>
                        <option value="32">32px</option>
                    </select>
                </div>
                <div className={styles["toolbar-btns-container"]}>
                    <div className={styles["toolbar-btns"]}>
                        <div className={styles['dark-mode-input']}>
                            <input type="radio" name="mode" value="Light" />
                            <input type="radio" name="mode" value="Dark" />
                        </div>                    
                        <button>
                            <FontAwesomeIcon icon="list"/>
                        </button>                    
                        <button>
                            <FontAwesomeIcon icon="redo"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Toolbar;