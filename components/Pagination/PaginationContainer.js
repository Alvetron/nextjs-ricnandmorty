import { getCharByBtnAsync, getCharByNumAsync, selectCurrentPage } from '@/store/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import styles from './pagination.module.css';

export default function ({data}) {
    const { pages } = data;
    
    const dispatch = useDispatch();
    
    const currentPage = useSelector(selectCurrentPage);
    const lastPaginationPage = currentPage + 5;

    const disablePrevBtn = currentPage === 1;
    const disableNextBtn = currentPage === pages;

    let paginationButtons = [];

    const prevPage = async () => {
        dispatch(getCharByBtnAsync({currentPage, isNext: false}))
    }
    const nextPage = async () => {
    dispatch(getCharByBtnAsync({currentPage, isNext: true}))
    }
    const setPageNumber = (expectedPage) => {
        dispatch(getCharByNumAsync(expectedPage))
    }
    
    const createPaginationButtons = () => {
        paginationButtons = [];

        for(let i = currentPage; i < lastPaginationPage; i++) {
            if(i > pages) return false;
            const obj = (
                <button key={`page${i}`} className={`${styles.pagin_btn} ${currentPage === i && styles.active}`} type='button' onClick={() => setPageNumber(i)}>
                    {i}
                </button>
            )
            paginationButtons.push(obj);
        }
        
    }
    createPaginationButtons();

    return <Pagination paginationButtons={paginationButtons} prevPage={prevPage} nextPage={nextPage} disablePrevBtn={disablePrevBtn} disableNextBtn={disableNextBtn}/>;
}