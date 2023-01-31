import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
