import Nav from '../Navigation/Nav';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.col}>
          <h2 className={styles.title}>Rick and Morty</h2>
          <p className={styles.subtitle}>fan site</p>
        </div>
        <Nav />
      </div>
    </header>
  );
}
