import { selectCharacters, selectCurrentPage } from '@/store/charactersSlice';
import { useSelector } from 'react-redux';
import CharacterList from '../characterList/CharacterList';
import PaginationContainer from '../Pagination/PaginationContainer';
import styles from './sectionCharcters.module.css';

export default function ({data}) {
    const charactersArray = useSelector(selectCharacters);
    const characters = charactersArray ? charactersArray : data.results;

    return ( 
        <section className={styles.section}>
            <h2 className={styles.title}>Rick and Morty Characters</h2>
            <CharacterList characters={characters}/>
            <PaginationContainer data={data.info} />
        </section>
     );
}

