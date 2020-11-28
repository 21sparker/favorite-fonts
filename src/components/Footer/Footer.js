import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div>
                <span>Author: Sean Parker</span>
            </div>
            <div>
                <a href='https://github.com/21sparker/favorite-fonts'>Github Repo</a>
            </div>
            
        </footer>
    )
}

export default Footer;