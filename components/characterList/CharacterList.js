import { delLikeCharId, selectLikedCharIds, setLikeCharIds } from '@/store/charactersSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalCharacter from '../ModalCharacter/ModalCharacter';
import CharacterCard from './CharacterCard';
import styles from './characterList.module.css';

export default function CharacterList({ characters }) {
  const dispatch = useDispatch();
  const likedCharIds = useSelector(selectLikedCharIds);

  const [characterData, setCharacterData] = useState(undefined);

  const likeHandler = (id) => {
    dispatch(setLikeCharIds(id));
  };
  const likeDelHandler = (id) => {
    dispatch(delLikeCharId(id));
  };
  const infoClickHandler = (characterData) => {
    setCharacterData(characterData);
  };

  return (
    <>
      <ul className={`container ${styles.list}`}>
        {characters.map((item) => (
          <CharacterCard
            item={item}
            key={item.id}
            likeHandler={likeHandler}
            likedCharIds={likedCharIds}
            likeDelHandler={likeDelHandler}
            infoClickHandler={infoClickHandler}
          />
        ))}
      </ul>
      {characterData && <ModalCharacter data={characterData} infoClickHandler={infoClickHandler} />}
    </>
  );
}
