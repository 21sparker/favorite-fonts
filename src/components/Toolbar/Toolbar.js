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
            </div>
        </div>
        
    )
}

export default Toolbar;