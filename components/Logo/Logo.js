import styles from './logo.module.css';

export default function Logo({ className }) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <h2 className={styles.title}>Rick and Morty</h2>
      <p className={styles.subtitle}>fan site</p>
    </div>
  );
}
