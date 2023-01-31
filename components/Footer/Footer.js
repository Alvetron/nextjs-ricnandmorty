import Logo from '../Logo/Logo';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <ul className={`${styles.column} ${styles.list}`}>
          <li>
            <a
              className={`fa-brands fa-instagram ${styles.link}`}
              href="#"
              aria-label="instagram link"></a>
          </li>
          <li>
            <a className={`fa-brands fa-steam ${styles.link}`} href="#" aria-label="steam link"></a>
          </li>
          <li>
            <a
              className={`fa-brands fa-telegram ${styles.link}`}
              href="#"
              aria-label="telegram link"></a>
          </li>
        </ul>
        <Logo className={styles.column} />
        <div className={styles.column}>
          <p className={styles.copyright}>
            Created by{' '}
            <a className={styles.copyright__link} href="mailto:andriikyryliuk@int.pl">
              Andrii Kyryliuk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
