import styles from './Navbar.module.css';

const Navbar = () => {

    return (
        <header className={styles.navbar}>
            <h2 className={styles.title}>
                Favorite Fonts
            </h2>
            <div className={styles['nav-links']}>
                <a className={styles['nav-link']} href="#">CATALOG</a>
                <a className={styles['nav-link']} href="#">FEATURED</a>
                <a className={styles['nav-link']} href="#">ARTICLES</a>
                <a className={styles['nav-link']} href="#">ABOUT</a>
            </div>

        </header>
    )
}

export default Navbar;