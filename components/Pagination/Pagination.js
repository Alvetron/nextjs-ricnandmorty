import styles from './pagination.module.css';

export default function Pagination({paginationButtons, prevPage, nextPage, disablePrevBtn, disableNextBtn}) {
    return ( 
        <div className={styles.pagination}>
            <button className={` ${styles.pagin_btn_next} ${styles.btn} fa-solid fa-angles-left`} onClick={prevPage} aria-label="Previous page" disabled={disablePrevBtn}></button>
            <div className={styles.pagination__wrapper}>
            {
                paginationButtons.map(item => item)
            }
            </div>
            <button className={`${styles.pagin_btn_next} ${styles.btn} fa-solid fa-angles-right`} onClick={nextPage} aria-label="Next page" disabled={disableNextBtn}></button>
        </div>
     );
}