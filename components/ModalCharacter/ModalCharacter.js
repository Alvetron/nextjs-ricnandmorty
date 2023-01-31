import styles from './ModalCharacter.module.css';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function ModalCharacter({ data, infoClickHandler }) {
  const { status, species, gender, origin, location } = data;
  const tableData = { status, species, gender, origin: origin.name, location: location.name };
  return createPortal(
    <div className={styles.modal}>
      <Image className={styles.image} src={data.image} width={200} height={200} alt={data.name} />
      <h5 className={styles.name}>{data.name}</h5>
      <table className={styles.table}>
        <tbody>
          {Object.keys(tableData).map((article) => (
            <tr key={article}>
              <td className={styles.col}>{article}:</td>
              <td className={styles.col}>{tableData[article]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className={`${styles.close_button} fa-solid fa-xmark`}
        onClick={() => infoClickHandler(undefined)}
        aria-label="close"
      ></button>
    </div>,
    document.getElementById('__next')
  );
}
