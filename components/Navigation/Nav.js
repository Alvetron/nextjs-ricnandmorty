import styles from './nav.module.css';

export default function () {
    return ( 
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>Main</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>Characters</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>Episodes</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>Contacts</a>
                </li>
            </ul>
        </nav>
     );
}