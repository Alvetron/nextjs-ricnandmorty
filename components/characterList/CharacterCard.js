import Image from 'next/image';
import styles from './characterList.module.css';

export default function CharacterCard({
  item,
  likeHandler,
  likeDelHandler,
  likedCharIds,
  infoClickHandler
}) {
  const isLiked = likedCharIds.includes(item.id);

  return (
    <li className={styles.card}>
      <Image className={styles.image} src={item.image} width={200} height={200} alt={item.name} />
      <div className={styles.inner}>
        <h4 className={styles.name}>{item.name}</h4>
        <p className={styles.status}>
          status:
          <span
            className={`${styles.status__text} ${
              item.status === 'Dead' && styles.status__text_dead
            } ${item.status === 'unknown' && styles.status__text_unknown}`}>
            {item.status}
          </span>
        </p>
      </div>
      <ul className={styles.user_list}>
        <li className={styles.user_list__item}>
          <button
            className={`${styles.user_list__button} ${isLiked ? styles.liked : ''}`}
            onClick={() => (isLiked ? likeDelHandler(item.id) : likeHandler(item))}>
            <i className={`${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
          </button>
        </li>
        <li className={styles.user_list__item}>
          <button className={styles.user_list__button} onClick={() => infoClickHandler(item)}>
            <i className="fa-solid fa-info"></i>
          </button>
        </li>
      </ul>
    </li>
  );
}
